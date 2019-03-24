---
title: Gatsbyでブログ始めました
description: Gatsbyでブログを初めた理由、Starter Template の選んだ理由、独自カスタマイズの内容を書きました。
date: "2019-03-24T23:46:37.121Z"
template: "post"
draft: false
tags:
  - "JavaScript"
  - "Gatsby"
image: "./2019-03-24 21-43-22.png"
---

- [なんでGatsbyなの？](#なんでgatsbyなの？)
- [どうやってStarter選んだの？](#どうやってstarter選んだの？)
- [どんなカスタマイズしたの？](#どんなカスタマイズしたの？)

## なんでGatsbyなの？

選んだ理由は
- せっかくやるなら、自分でカスタマイズして良いものを作りたい
- GraphQL とか最近のイケてる技術を触りたい 

って感じです。

業務だと、なかなか新しい技術に触れないじゃないですか？ :pencil:

Gatsbyだと [GraphQL](https://www.gatsbyjs.org/docs/querying-with-graphql/) とか [画像最適化](https://www.gatsbyjs.org/docs/using-gatsby-image/) とか [PWA](https://www.gatsbyjs.org/docs/progressive-web-app/) とか、フロントエンドのイケてる技術が使われてるので、それのキャッチアップを図って選びました。

## どうやってStarter選んだの？

じゃあ始めようとなった時に、自分はまっったくデザインできない :innocent: ので、[Starter Template](https://www.gatsbyjs.org/starters/?v=2) から選ぶことにしました。

デザイン重視で選んで、[gatsby-starter-lumen](https://www.gatsbyjs.org/starters/alxshelepenok/gatsby-starter-lumen/) と [gatsby-starter-gcn](https://www.gatsbyjs.org/starters/ryanwiemer/gatsby-starter-gcn/) が残ったんですが、 gatsby-starter-gcn は Contentful と密結合な気がしたので止めました。

Contentful は便利かと思ったのですが、
```markdown
- リソースが markdown + image なら、管理コストが低いのでCMSは不要
- 無料プランの枠がすぐに無くなりそう
```

という理由で、今回は利用見送りました。 :wave:

## どんなカスタマイズしたの？

下記のようなTODOリストを作って対応していきました。


```markdown
- [x] 記事一覧で記事の下に画像
  - [x] デザイン
- [x] 記事詳細で記事名の下に画像
  - [x] デザイン
- [x] pagenationを10に
- [x] RSS
- [x] サイトアイコン
- [x] spealers deck へのリンクアイコン
- [x] 画像の管理（紐付け）をどうするか
- [x] category廃止tagオンリー
- [x] モバイルデザイン
- [x] 画像リンク
- [x] mdと画像のディレクトリ構成変更
- [x] emoji

### リリース後に対応
- [ ] adminの修正
- [ ] 経歴ページ
- [ ] 制作物ページ
- [ ] 検索
- [ ] コメント欄
- [ ] ブログ投稿したらtwitterに自動投稿
- [ ] テスト修正

```

リリース前で、だいたい調査、学習、実装で20時間くらいです。
後の記事として、つまづきポイントを解説していきたいと思います。

独自カスタマイズが増えることに一抹の不安を抱えながら、ブログスタートです。 :running: