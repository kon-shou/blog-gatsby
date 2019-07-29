---
title: Gatsbyのビルドをザックリ理解
description: Gatsbyがどういう仕組みで静的ファイルを出力するのかまとめました。
date: "2019-07-27"
template: "post"
draft: false
tags:
  - "JavaScript"
  - "Gatsby"
  - "GraphQL"
image: ./gatsby.jpeg
---

0. [はじめに](#はじめに)
0. [対象読者](#対象読者)
0. [ツールの簡単な紹介](#ツールの簡単な紹介)
0. [ビルドの流れ](#ビルドの流れ)
0. [bootstrap](#bootstrap)
0. [クエリの実行](#クエリの実行)
0. [さいごに](#さいごに)

## はじめに

自分はGatsbyでブログを書いてるのですが、技術的に気になる点があったので調査しました

- 「Gatsbyでのビルドってどういう流れなの？」
- 「GatsbyにおけるGraphQLのスキーマってどうなってるの？」
- 「GatsbyにおけるGraphQLのクエリ実行ってどうなってるの？」

みたいなことが気になったので、Gatsbyのコードの流れを追ってみました。

なお本記事で扱う Gatsby のバージョンは `2.13.41` です。

## 対象読者
- Gatsbyのことはなんとなく知ってる人
- GraphQLのことをぼんやり知ってる人

## ツールの簡単な紹介

### Gatsby とは
react で書ける静的サイトジェネレータです。

特徴としては

- view が react で書ける
- コンポーネントにデータを GraphQL で持ってこれる
- plugin でだいたい何でもできる

みたいなものが有ります。

ちなみに、Gatsbyでのサイト作成の流れとしては

1. お気に入りのスターターテンプレートを見つけて git pull
2. そのスターターテンプレートに plugin を加える
3. markdown で自身のコンテンツを記述する
4. `gatsby develop` で出力してみて、内容チェック
5. デプロイ

みたいな流れです。

### GraphQL とは
これは

- https://graphql.org/
- https://employment.en-japan.com/engineerhub/entry/2018/12/26/103000
- https://www.webprofessional.jp/rest-2-0-graphql/

等の資料を参考いただければ、分かりやすいかと思います。

ただ、どうも調べると Gatsbyでの利用と一般的(?)な利用とでは下記の点で異なるようです。

- Gatsbyの場合は、自分でスキーマを用意しないで良い
- Gatsbyの場合は、「GraphQLのクエリ」から「データ取得ロジック」に変換するGraphQLサーバーに相当するものが無い

これはどういうことなんでしょうか？
実際にコードを追いましょう。

## ビルドの流れ

ビルドの流れを追うためには https://github.com/gatsbyjs/gatsby からプルするのが良いかと思います。

`gatsby develop` をすると `gatsby-cli` を経て `gatsby/dist/commands/develop` に飛びます。

それを抜粋したのが下記になります。

```js:title=packages/gatsby/src/commands/develop.js
module.exports = async (program: any) => {
  
  // 略
  
  program.port = await detectPortInUseAndPrompt(port, rlInterface)
  // Start bootstrap process.
  const { graphqlRunner } = await bootstrap(program)

  // Start the createPages hot reloader.
  require(`../bootstrap/page-hot-reloader`)(graphqlRunner)

  const queryIds = queryUtil.calcInitialDirtyQueryIds(store.getState())
  const { staticQueryIds, pageQueryIds } = queryUtil.groupQueryIds(queryIds)

  let activity = report.activityTimer(`run static queries`)
  activity.start()
  await queryUtil.processStaticQueries(staticQueryIds, {
    activity,
    state: store.getState(),
  })
  activity.end()

  activity = report.activityTimer(`run page queries`)
  activity.start()
  await queryUtil.processPageQueries(pageQueryIds, { activity })
  activity.end()

  require(`../redux/actions`).boundActionCreators.setProgramStatus(
    `BOOTSTRAP_QUERY_RUNNING_FINISHED`
  )

  await waitJobsFinished()
  requiresWriter.startListener()
  db.startAutosave()
  queryUtil.startListening(queryQueue.createDevelopQueue())
  queryWatcher.startWatchDeletePage()

  const [compiler] = await startServer(program)

  // 略

}
```

ここでの大まかな流れは下記です

1. bootstrap の処理
2. クエリ（ static query と page query ）の実行
3. 2の結果を元に、htmlの生成

です。
ここで bootstrap という新しい言葉が出たので、それを先に見ましょう。

## bootstrap

bootstrap プロセスはこのファイルです。
`https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/bootstrap/index.js`

このbootstrapプロセスでは `activity.start` / `activity.end` という単位で多くの処理を実行しています。

この activity は react コンポーネントのライフサイクルと同じイメージで捉えたら分かりやすいと思います。

この activityの一つとして 
```js:title=packages/gatsby/src/bootstrap/index.js
  // Create Schema.
  activity = report.activityTimer(`building schema`, {
    parentSpan: bootstrapSpan,
  })
  activity.start()
  await require(`../schema`).build({ parentSpan: activity.span })
  activity.end()
```

というのがあり、ここでスキーマのビルドを行っています。
これが最終的にどうなるかというと、下記のようになります。

```js:title=packages/gatsby/src/schema/schema.js
  const schema = await buildSchema({
    schemaComposer,
    nodeStore,
    types: sortedTypes,
    fieldExtensions,
    thirdPartySchemas,
    typeMapping,
    typeConflictReporter,
    parentSpan,
  })

  // 略

  store.dispatch({
    type: `SET_SCHEMA`,
    payload: schema,
  })
```

詳細な説明を省くのですが、これは実際のデータからスキーマを生成し、それをreduxに格納しています。

## クエリの実行

では、クエリの実行はいつなのかですが、これはbootstrap処理が終わった後です

```js:title=packages/gatsby/src/commands/develop.js
  activity = report.activityTimer(`run page queries`)
  activity.start()
  await queryUtil.processPageQueries(pageQueryIds, { activity })
  activity.end()
```

この `processPageQueries()` でクエリ実行をしているのですが、これは何をやってるのでしょうか？

これまた説明を色々と省略するのですが、

1. graphql実行をhandlerとして持つQueueを生成
2. そのQueueにクエリを格納＆クエリ実行

という手順でクエリを実行しています。

Queueの作成はこんな感じです

```js:title=packages/gatsby/src/query/queue.js
const createBuildQueue = () => {
  const handler = (queryJob, callback) =>
    queryRunner(queryJob)
      .then(result => callback(null, result))
      .catch(callback)
  return new Queue(handler, createBaseOptions())
}
```

handlerとしてのクエリ実行はこんな感じです

```js:title=packages/gatsby/src/query/query-runner.js
// Run query
module.exports = async (queryJob: QueryJob) => {
  const { schema, program, webpackCompilationHash } = store.getState()

  const graphql = (query, context) =>
    graphqlFunction(
      schema,
      query,
      context,
      withResolverContext(context, schema),
      context
    )

  // Run query
  let result
  // Nothing to do if the query doesn't exist.
  if (!queryJob.query || queryJob.query === ``) {
    result = {}
  } else {
    result = await graphql(queryJob.query, queryJob.context)
  }

  // 略

  const resultJSON = JSON.stringify(result)

  await fs.outputFile(resultPath, resultJSON)
}
```

かなり省いてますが、クエリ実行の流れはこんな感じです。
クエリ実行した結果を json ファイルとして出力しています。

そして最後に 静的サイトの出力はどうなっているかですが、これは

```js:title=packages/gatsby/src/commands/develop.js
  const [compiler] = await startServer(program)
```

で行われます。
ここでクエリにもとづいたjsonからHTMLを描写します。

## さいごに

記事の冒頭に書いた疑問のQ＆Aを書いて〆ようかと思います。

Q. Gatsbyでのビルドってどういう流れなの？

A. `gatsby/dist/commands/develop` に書いてある。

Q. GatsbyにおけるGraphQLのスキーマってどうなってるの？

A. 実際のデータからスキーマを生成してる。そのスキーマはreduxに置かれてる。

Q. GatsbyにおけるGraphQLのクエリ実行ってどうなってるの？

A. ビルド中にスキーマを元にクエリ実行して、結果をjsonとして出力してる

## 参考

- https://graphql.org/
- https://employment.en-japan.com/engineerhub/entry/2018/12/26/103000
- https://www.webprofessional.jp/rest-2-0-graphql/
- https://www.gatsbyjs.org/docs/gatsby-lifecycle-apis/
- https://www.narative.co/articles/understanding-the-gatsby-lifecycle
- https://gist.github.com/sw-yx/09306ec03df7b4cd8e7469bb74c078fb
