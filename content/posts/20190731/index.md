---
title: Step by step で学ぶ react + redux
description: reactとreduxについて、TODOアプリをライブラリを段階的に導入することで解説しました。
date: "2019-07-31"
template: "post"
draft: false
tags:
  - "JavaScript"
  - "React"
image: ./2019-07-31.png
---

0. [というLTをしました](#というLTをしました)
0. [スライドの補足](#スライドの補足)

## というLTをしました

<iframe src="//slides.com/kon_shou/learn_react_redux_step_by_step/embed" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

こんなLTをしました。

## スライドの補足

https://github.com/kon-shou/learn_redux_step_by_step

スライドに使ったソースコードはレポジトリに置いてます。

以下、スライドの（主観てんこ盛りな）補足。

- redux 無し
  - 親の state をひたすらバケツリレーする

- redux 有り / react-redux 無し
    - 親の state を store として別のところに切り出す
        - 「『別のところ』って何？」って話だけど、ブラウザのローカルストレージみたいなイメージ
    - そのローカルストレージに対して「xxxを更新して！」みたいな命令を発信するのが action
        - 「『xxxを更新して！』みたいな命令がきたら実際にどうするのか」を書くのが reducer
        - 「実際にどうするのか」は「storeのxxxを更新する」みたいな感じ
        - 結果、 `component =(action)=> reducer => store更新 => component更新 ... ` がクルクル回る
    - あくまで redux 単体だと store, action, reducer を上手くやってくれるやつで、それらと react の接続は管轄外
        - その react との接続をやってくれるのが react-redux

- redux 有り / react-redux 有り
    - connect / provider が登場する
        - connect は「コンポーネントとstoreをconnect」する
            - 親から子へのバケツリレーが不要になる
        - connect してくれるのは２種類
            - store が持ってる情報 
            - store を更新するための action
      
- スライドには書いてないこと
    - store は肥大化しやすい
        - コンポネーントとstoreがconnectされたため、更新がしやすいため
    - store は「アプリケーションとして横断的な情報」を格納するべき
        - 例えば「ページの生成から消滅まで必要な情報」があるとして、それを他のページで利用しないなら、それは store でなく親のstateで良いかもしれない
 
