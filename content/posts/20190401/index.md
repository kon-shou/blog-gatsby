---
title: Serverless の紹介 for Beginner
description: Serverlessの入門記事です。初心者向けにserverlessの良いところを紹介します。 
date: "2019-04-17T23:46:37.121Z"
template: "post"
draft: false
tags:
  - "Serverless"
image: "./2019-04-17-001.png"
---

- [社内勉強会でServerlessについて発表をしました](#社内勉強会でserverlessについて発表をしました)
- [良いとこ①プロジェクトの雛形がすぐに出来上がる](#良いとこ①プロジェクトの雛形がすぐに出来上がる)
- [良いとこ②デプロイがすぐに終わる](#良いとこ②デプロイがすぐに終わる)
- [良いとこ③テストがすぐにできる](#良いとこ③テストがすぐにできる)
- [まとめ](#まとめ)


## 社内勉強会でServerlessについて発表をしました

Serverless Framework について社内発表会を行いました。

https://speakerdeck.com/kon_shou/serverless-ru-men-huan-jing-gou-zhu-karadepuroimade

せっかくなので、この記事で改めて serverlessとは/serverlessの良いところ を紹介したいと思います。

## Serverlessとは

AWS Lambda や Google Cloud Functions の開発やデプロイをサポートしてくれるツールです。

[公式ドキュメント](https://serverless.com/framework/)も充実しており、大抵のことはこれを読めば解決するはず。

ただ、何も知らない人にドキュメントを読めというのも、酷な話… :sob:

なので、僕が考える serverless の良さを紹介して、それをドキュメントを読むための足がかりにしてもらえればと思います。 :grin:

なお、以降はAWS Lambda にデプロイする前提として書いています。

## 良いとこ①プロジェクトの雛形がすぐに出来上がる

ローカル環境に serverless をインストールした後に、

```bash
sls create --template google-nodejs --path my-service
```

を叩くことで、 handler.js と serverless.yml の雛形ができあがったプロジェクトが出来上がります。

- `handler.js`     => 自分がやりたいことのロジック
- `serverless.yml` => AWSの設定 

と言った感じに、「自分がやりたいこと」をすぐに書き始められます :computer:

そのおかげで「AWS Lambdaって、どんなファイル形式なんだ...？」みたいな余分なことを考えないで済みます。


## 良いとこ②デプロイがすぐに終わる

「テストするために、zipに固めて、コンソールをポチポチして、デプロイして...」

serverlessを使ってなかったら、こんな感じでまぁまぁ面倒な手順になるデプロイも serverless なら簡単です。

```bash
sls deploy
``` 

の一発です。

これで `serverless.yml` に記述した、AWSの設定に従ってデプロイが走ります。

### 初見で注意な罠その１ :collision:

ただ初心者絶対に困らせるマンとして、デフォルトの設定ではregionの設定が必要な点は注意です。

```yaml:title=serverless.yml
# you can overwrite defaults here
  stage: dev
  region: ap-northeast-1
```

こんな感じにregionを設定しておけば、東京リージョンのコンソールを開いて「あれ！？Lambdaがない！」なんてことを防げるかと思います。

## 良いとこ③テストがすぐにできる

serverlessを使ってないと、割と手も足も出ないのがテストだと思います。

「テストするために、zipに固めて、コンソールをポチポチして、デプロイして...」

もちろん、そんなことやる必要はありません。

そうserverlessならね :sunglasses:

```bash
sls invoke local -f {関数名}
``` 

とローカルで一発叩くだけで、実際にデプロイして関数を動かしたのと、ほとんど似たような結果を得られます。

文法が間違ってたりだとか、予想した挙動と違うとか、そういう動作確認がこれだけで済ませることが出来ます。

また本番環境にデプロイした後のテストも簡単です。

```bash
sls invoke -f {関数名}
``` 

これで「開発→ローカルテスト→デプロイ→本番環境テスト→開発...」のサイクルをガンガン回していけます。

### 初見で注意な罠その２ :collision:

ローカルと本番環境の Lambda 実行時の権限には要注意です。

自分の場合の話ですが

「ローカルは serverless.yml の profile（＝何でもできるマン）を元にテストをさせてたけど、デプロイ後は serverless.yml の `iamRoleStatements` が記述させなくて Access Denied !!」

なんてことで1時間くらい頭を抱える... :innocent: なんてことがあったので、そんなことにならないように覚えておいてもらえれば！

## まとめ

開発手順としては、概ね下記の流れで行えるかと思います。
```markdown
1. `sls create --template google-nodejs --path my-service` でプロジェクトの雛形を作成
2. `handler.js` に自分がやりたいことを記述する
3. `sls invoke local -f {関数名}` で、ロカール環境にてテスト行う
4. `serverless.yml` にサーバーの設定を記述する
5. `sls deploy` でサーバーにデプロイを行う
6. `sls invoke -f {関数名}}` で、本番環境にてテスト行う
```

やっぱりテストとデプロイをコマンドだけで行えるのは最高です :+1:

ちなみに僕の場合では、AWS Lambda と serverless を使って、ブログ記事を投稿したら、自動的にtwitterに宣伝（？）ツイートを投稿するようにしてたりします。

是非この記事が、serverless の良さを知ってもらうのに役にたてばと思います
