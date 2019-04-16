---
title: Serverless 入門
description: Serverless 入門 ~環境構築からデプロイまで~ という資料の解説記事です
date: "2019-03-24T23:46:37.121Z"
template: "post"
draft: false
tags:
  - "Serverless"
  - "入門記事"
image: "./2019-03-24 21-43-22.png"
---

- [社内勉強会でServerlessについて発表をしました](#社内勉強会でserverlessについて発表をしました)
- [資料の補足](#資料の補足)
- [実際に作成したもの](#実際に作成したもの)

## 社内勉強会でServerlessについて発表をしました

Serverless Framework について社内発表会を行ったので、その共有・解説を行いたいと思います。

https://speakerdeck.com/kon_shou/serverless-ru-men-huan-jing-gou-zhu-karadepuroimade

## 資料の補足

じゃあ始めようとなった時に、自分はまっったくデザインできない :innocent: ので、[Starter Template](https://www.gatsbyjs.org/starters/?v=2) から選ぶことにしました。

デザイン重視で選んで、[gatsby-starter-lumen](https://www.gatsbyjs.org/starters/alxshelepenok/gatsby-starter-lumen/) と [gatsby-starter-gcn](https://www.gatsbyjs.org/starters/ryanwiemer/gatsby-starter-gcn/) が残ったんですが、 gatsby-starter-gcn は Contentful と密結合な気がしたので止めました。

Contentful は便利かと思ったのですが、
```markdown
- リソースが markdown + image なら、管理コストが低いのでCMSは不要
- 無料プランの枠がすぐに無くなりそう
```

aaaaa :innocent:

## 実際に作成したもの

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