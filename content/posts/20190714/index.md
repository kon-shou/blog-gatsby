---
title: Laravel のコレクションメソッドは切り分けたほうが良いかもしれない
description: Laravelのコレクションメソッドの使い方についてまとめました。
date: "2019-07-14"
template: "post"
draft: false
tags:
  - "Laravel"
image: ./2019-07-14.png
---

0. [本記事で言いたいこと](#本記事で言いたいこと)
0. [解説中で使う変数とメソッド](#解説中で使う変数とメソッド)
0. [メソッドの簡単な解説](#メソッドの簡単な解説)
3. [コードを書いてみる](#コードを書いてみる)
4. [結論](#結論)
5. [参考](#参考)

## 本記事で言いたいこと
- やりたいことに合わせてメソッドは切り分けた方が、わかりやすいと思う。
- でもやり過ぎると、やっぱりわかりにくいかもしれない。

## 解説中で使う変数とメソッド
```php
$books = collect([
    ['id' => 1, 'title' => 'How to Programming', 'is_english' => true, 'price' => 100],
    ['id' => 2, 'title' => '堅牢なシステム構築', 'is_english' => false, 'price' => 200],
    ['id' => 3, 'title' => 'Be Good at Function', 'is_english' => true, 'price' => 300],
    ['id' => 4, 'title' => 'Laravelコレクション入門', 'is_english' => false, 'price' => 400],
    ['id' => 5, 'title' => 'Love beautiful code', 'is_english' => true, 'price' => 500],
]);

// Slack通知を行う
// 今回は便宜上、渡された文字を出力するだけ
function toSlack($word)
{
    echo $word;
}

// IDと値段を登録するAPI
// 300円以上は登録に失敗する仕様
function callRegisterApi($id, $price)
{
    return ['succeeded' => $price > 300 ? true : false];
}
```

## メソッドの簡単な解説
### each()
#### 役割
- コレクションのそれぞれに対して、何かの処理を実行する。
- 返り値については気にしなくてよい。

#### 例
$books のタイトルをslack通知する

```php
$books->each(function (array $book) {
    toSlack("{$book['title']}の値段は{$book['price']}です");
});
```

コードを呼んでいる時に `each()` を見ると「この処理は返り値について考えなくて良いんだな」と思うので、割と心が安心します。
それだけに `use ($results)` など見たら「なぜ `map()` とかでないのだろう…？」と身構えながら読むことになり、基本辛いです。

### map()
#### 役割
- コレクションから、別のコレクションを新しく作る

#### 例
本に「税込み価格」を加えた、新しいコレクションを作る

```php
$withTaxBooks = $books->map(function (array $book) {
    $book['with_tax_price'] = $book['price'] * 1.08;
    return $book;
});
```

コードを呼んでいる時に `map()` を見ると「この処理は何か新しいコレクションを作ってるんだな。じゃあ何を作ってるんだろう？」と思い、それを主眼において読み進めます。

そう思って読み進んでて「結局 API をループして呼ぶだけだった」となったら、すごいがっかりします。

### filter()
#### 役割
- コレクションを、とある条件で選別する

#### 例
英語の本だけを抽出する

```php
$englishBooks = $books->filter(function (array $book) {
    return $book['is_english'];
});
```

何かの処理を実行する際に、あらかじめ条件が分かっているなら、filterで処理に渡すものを減らしてほしいです。
例えば下記のコードになると、「１つのメソッドに２つのことをやるのでなく、あらかじめ filter を使って欲しいな〜」と思います。
（ケースバイケースではあるのですが…）

```php
$books->each(function (array $book) {
    if ($book['is_english']) {
        toSlack("{$book['title']}の値段は{$book['price']}です");
    }
});
```

## コードを書いてみる

実際に `each()` だけのものと、複数のメソッドを使ったものの２つを見てみましょう。

### eachで全部やる

```php
$results = collect();
$books->each(function (array $book) use ($results) {
    // 英語の本を登録対象とする
    if ($book['is_english']) {
        $result = callRegisterApi($book['id'], $book['price']);
        // 登録に失敗した場合
        if (!$result['succeeded']) {
            // slack通知を行う
            toSlack("{$book['title']}の登録に失敗しました");
            // 失敗したIDを保存する
            $results->push($book['id']);
        }
    }
});
// 登録に失敗した本のIDを出力する
var_dump($results);
```

`each()` の中で色々と頑張ってます。
実際に書いてみると、if 文のネストがあるものの、そんなに可読性が悪いというものではありません。
本当は「each文で頑張ると良くないよ〜」と言いたかったのですが、正直このくらいの量だったら問題無いような気がしますね。

### 複数のメソッドに切り分ける
```php
// 英語の本を登録対象とする
$englishBooks = $books->filter(function (array $book) {
    return $book['is_english'];
});
// 登録結果をコレクションとする
$results = $englishBooks->map(function (array $book) {
    $result = callRegisterApi($book['id'], $book['price']);
    return ['id' => $book['id'], 'title' => $book['title'], 'succeeded' => $result['succeeded']];
});
// 登録結果から失敗したものを抽出する
$failedResults = $results->filter(function (array $result) {
    return !$result['succeeded'];
});
// 登録に失敗した本のタイトルをslack通知する
$failedResults->each(function (array $result) {
    toSlack("{$result['title']}の登録に失敗しました");
});
// 登録に失敗した本のIDを出力する
var_dump($failedResults->pluck('id'));
```

全ての処理をコレクションメソッド毎に切り分けたのがこちら。
正直 `each()` で頑張ってたものより、可読性が悪くなっているような…。

ただそれは「今回のケースだと」という前置きがつくと思っています。
ある程度コードの規模が大きくなってくると、こっちの方がテストのしやすさや if 文の少なさという部分で軍配が上がるかなと。

あとメソッドを使い分けると、それに合わせて考えることも分かれるので、実装のための頭の整理になるというメリットもあると思います。

## 結論
「何がなんでもメソッドを分けたほうがいい」という訳ではないけど、出来る限りで使い分けたほうが何かと良さそう

## 参考
- https://readouble.com/laravel/5.8/ja/collections.html
