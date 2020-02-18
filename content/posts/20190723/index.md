---
title: tig + ターミナルのすすめ
description: 自分がよく使う tig + gitコマンドについて紹介記事です。
date: "2019-07-23"
template: "post"
draft: false
tags:
  - "git"
  - "開発ツール"
image: ./2019-07-23.png
---

0. [はじめに](#はじめに)
0. [使用ツール](#使用ツール)
0. [ブランチをdevelopから切って開発スタートの場合](#ブランチをdevelopから切って開発スタートの場合)
0. [開発中のブランチをdevelopの最新にrebase/mergeする場合](#開発中のブランチをdevelopの最新にrebase/mergeする場合)
3. [コミットしたけどaddし忘れがあったので、直前のコミットに追加する場合](#コミットしたけどaddし忘れがあったので、直前のコミットに追加する場合)
4. [コミットしたけどaddし忘れがあったので、いくつか前のコミットに追加する場合](#コミットしたけどaddし忘れがあったので、いくつか前のコミットに追加する場合)

## はじめに

自分は基本的に「tig + ターミナル」でgit操作を行っています。

- いちいち画面を開かなくていい
- どこでも開発できるようになる
- コマンドをやり直したい場合に「↑」で履歴を追える

という利点があって、なかなかオススメです。

あとついでにケースごとに「どうコマンドを打つのか」をまとめました。

## 使用ツール
- コンソール
- [tig](https://github.com/jonas/tig)

## ブランチをdevelopから切って開発スタートの場合
### コマンド
1. `git co develop`
2. `git pull`
3. `git co -b feature/xxx`
4. `tig` → `s` → `u` (ステージング)
4. `git commit -m "xxx"`

### 解説
develop ブランチを最新にし、そこから `feature/xxx` を生やして移動、最後に tig でステージングしコミットをしています。

`git co -b` とすることで作成と移動を一緒に行えます。（[ドキュメント](https://git-scm.com/docs/git-checkout#Documentation/git-checkout.txt-emgitcheckoutem-b-Bltnewbranchgtltstartpointgt)）

また、tig を使うことで、変更をhunkでstagingすることができます。

最後に `git commit -m` とコメント付きでコミットを行います。

これの利点は、コミットをやり直したいときなどに、コンソールの履歴から実行できるという点です。

## 開発中のブランチをdevelopの最新にrebase/mergeする場合
### コマンド

1. `git co develop`
2. `git pull`
3. `git co feature/xxx`
4. `git rebase develop` / `git merge develop`

### 解説
develop ブランチを最新にし、それにrebase、もしくはdevelopをマージです。

自分はコミットログは綺麗にしたいとは思ってるけど、rebase に 30min かかるのなら、mergeしてしまえばいいと思ってます。

## コミットしたけどaddし忘れがあったので、直前のコミットに追加する場合
### コマンド
2. `tig` → `s` → `u` (ステージング)
3. `git commit --amend`

### 解説
`--amend` というオプションをつけることで、直前のコミットに変更を追加することが出来ます。

場合によっては `git reset HEAD^` と叩いて、直前のコミットを戻すこともあります。

## コミットしたけどaddし忘れがあったので、いくつか前のコミットに追加する場合
### コマンド
2. `tig` → `s` → `u` (ステージング)
3. `git fixup`
5. `git rebase as 4`

### 解説
まず変更対象をステージングして、 `git fixup` で "fixup! xxx" みたいなコミットを生成します。
そのあと ` git rebase -i --autosquash HEAD~4` のエイリアスを叩いてます。

`git fixup` はこちらを使わせていただいてます。非常に素晴らしいスクリプトです。

https://qiita.com/uasi/items/57da2e4268d348b371fb

エイリアスの設定ははこんな感じです。

```bash:title=.gitconfig
[alias]
        co = checkout
        as = "!f(){ git rebase -i --autosquash HEAD~$1;};f"
```

こちらのやり方を参考にさせてもらいました。

https://qiita.com/yatemmma/items/22aa62e232776f4f330b

## 参考
- https://qiita.com/uasi/items/57da2e4268d348b371fb
- https://qiita.com/yatemmma/items/22aa62e232776f4f330b
