---
title: 2020/5時点のNoSQLとかAmplifyとかFirebaseに関する理解
description: NoSQL関連について、自分の理解を書き出しました。
date: "2020-05-19"
template: "post"
draft: false
tags:
  - "NoSQL"
  - "Firebase"
  - "Amplify"
  - "GraphQL"
---

**注：この文章はNoSQLとかAmplifyとかFirebaseも実際に使ってない人間がドキュメントと伝聞を元に書いてるので、たぶん間違いが含まれます。疑って読んでください。**

# NoSQLとRDBのデータへのアプローチの違い

下記の文章は、NoSQLのおける設計をわかりやすく説明している。

> NoSQL 設計では、RDBMS 設計とは異なる考え方が必要です。RDBMS の場合は、アクセスパターンを考慮せずに正規化されたデータモデルを作成できます。その後、新しい質問とクエリの要件が発生したら、そのデータモデルを拡張することができます。Amazon DynamoDB の場合は対照的に、答えが必要な質問が分かるまで、スキーマの設計を開始しないでください。ビジネス上の問題とアプリケーションのユースケースを理解することが極めて重要です。

<div style="text-align: right">
(<a href="https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/bp-modeling-nosql.html">
DynamoDBでリレーショナルデータをモデル化するための最初のステップ
</a>)
</div>

RDBにおいて、SQLは優等生である。

データが存在していれば「あれとこれを取得して、それをいい感じに見やすくして持ってきて」と言えば、そのとおりに持ってきてくれた。

そのため「将来のビジネス要件が不確定な状態でも、とりあえずデータを入れておき、要件が確定した段階でSQLで必要なデータを取ってくる」という手法が可能だった。

それに対してNoSQLの場合、そいつは優等生じゃない。

「いい感じに見やすくして持ってきて」をしたいなら、そのようにデータを貯めておいて、それをそのままゴソッと持ってくるしかできない。

これが上記のドキュメントにおける「アクセスパターン」というやつ。

なぜ、そんな一見ではRDBの下位互換のようにも見えることになっているかの理由は、NoSQLがRDBのもつ高い処理コストを解決しているためである。

> この種のワンタイムクエリは、データにアクセスするための柔軟な API を提供しますが、大量の処理が必要です。

> RDBMS システムを減速させるもう 1 つの要素として、ACID 準拠のトランザクションフレームワークをサポートする必要がある点があります。

> これらの 2 つの要因は、従来の RDBMS プラットフォームをスケーリングするための主な障壁です。

> このため、高トラフィックのクエリに対して低レイテンシーの応答が必要な場合は、NoSQL システムを利用すると、一般的に技術的および経済的な効果がもたらされます。

<div style="text-align: right">
(<a href="https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/bp-relational-modeling.html">
DynamoDBでリレーショナルデータをモデル化するためのベストプラクティス
</a>)
</div>

処理コストを抑えるために、NoSQLでは基本的にはハッシュキーによるデータ取得を主眼において、ソートとか重いことをしたいなら、まぁ面倒くさいけど色々と頑張ってね★ という具合になる。

そのためNoSQLに適してるデータの種類は「トランザクションデータ」とか「ユーザーの行動履歴」とかいう「ただあるがままを表示する」ようなものに向いている。

その理由は、繰り返しになるが、NoSQLは難しいこと（データのJoinとか）を極力避けることで、RDBのボトルネックを解消することを目的に置いているため。

# 安くて楽したいからサーバーレスを使うのに、NoSQLが辛い問題

じゃあNoSQLでスキーマの設計はどうしたら良いの？という疑問に対して、下記のような文章が書かれている。

> DynamoDB の場合は対照的に、答えが必要な質問が分かるまで、スキーマの設計を開始しないでください。ビジネス上の問題とアプリケーションのユースケースを理解することが不可欠です。

<div style="text-align: right">
(<a href="https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/bp-general-nosql-design.html">
DynamoDB に合わせた NoSQL 設計
</a>)
</div>

「いやいやいや、そんな答えがわかった上でデータ入れることばっかじゃないし！こちとらスタートアップなんじゃ、とりあえず後で機能を考えるから、データだけ溜めさせてくれや。」が通じない。

あらかじめ、モデルとその扱われ方を列挙して、それに合わせてデータ構造を定義したり、セカンダリインデックスを貼っていく、みたいなことが必要になる。

ここで見出しのように「俺、楽したいのにサーバーレス選んだのに何でこんなめんどいことやってんだ…RDBならテーブル定義してデータ投げるだけでいいのに」ということになる。

たぶん「モデルとその扱われ方を列挙」をスキップして、とにかく非正規化！データ重複！で先に進むこともできるだろうけど、その場合は「データが混沌」×「そのとり方もわからない」=「死亡」の未来になるはず。

RDBだと正規化した上でデータを収めておけば、SQLの柔軟さのおかげで、どうにでもなることがNoSQLではならない。

# FirebaseとAmplifyでのNoSQLへのアプローチ

以上が、NoSQLについての机上のお話で「じゃあ実際に作るとなるとどうなの？」ということで、たぶんメジャーなものでFirebaseとAmplifyがあげられる。

FirebaseはFirestoreで、AmplifyはDynamoDB。

どちらも良し悪しあるんだろうけど、ぱっと見と読んだり聞いたりする話だと、自分の考えは下記だ。

Firebase 
- データ構造の定義の自由度が高い。
- 自由度が高い分、自分で考えなきゃいけない。

Amplify
- データ構造の定義の自由度が、Firebaseほど高くない。
- その分、自分で考えなきゃいけないことが減る。

そして自分がNoSQLを使って実装するなら、現時点ならAmplifyを選択する。

# FirebaseのNoSQL(Firestore)に対するアプローチ
**この章は特に情報の正確性に懸念があります！！**

FirebaseにおけるFirestoreへのデータの読み書きは、かなりフリーダムである。

書き込み

```js
db.collection('cities').doc('LA').set(data);
```

<div style="text-align: right">
(<a href="https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ja">
Cloud Firestore にデータを追加する
</a>)
</div>

読み込み

```js
let citiesRef = db.collection('cities');
let query = citiesRef.where('capital', '==', true).get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
}
```

<div style="text-align: right">
(<a href="https://firebase.google.com/docs/firestore/query-data/queries">
Cloud Firestore で単純なクエリと複合クエリを実行する
</a>)
</div>

このままだとあまりに自由であるため、設計者が想定してしないデータ構造の書き込みが実装される可能性がある。

そのような書き込みはセキュリティルールで防ぐ、というのがFirestoreのやり方らしい。

そして聞くところによると、そのルールの設定がしんどいというお話。

たぶん、ダックタイピングと似たような話で自由さとか実装速度とかとトレードオフなんだろうという気がする。

ただ自分は根っからペチパーで「タイプヒンティング最高だぜ」というタイプなので向かないんだろうなと思ってる。

# AmplifyのNoSQL(DynamoDB)に対するアプローチ

対してAmplifyのDynamoDBへのデータの読み書きは、AppSyncと連携してGraphQLを使用する場合だと、GraphQLのスキーマからメソッドが生成されるので、それを利用する。

スキーマを下記のように定義すると

```graphql
type Customer @model
@key(name: "byRepresentative", fields: ["accountRepresentativeID", "id"]) {
    id: ID!
    name: String!
    phoneNumber: String
    accountRepresentativeID: ID!
    ordersByDate: [Order] @connection(keyName: "byCustomerByDate", fields: ["id"])
    ordersByStatusDate: [Order] @connection(keyName: "byCustomerByStatusByDate", fields: ["id"])
}
```

<div style="text-align: right">
(<a href="https://docs.amplify.aws/cli/graphql-transformer/dataaccess">
Data access patterns
</a>)
</div>

下記のようなクエリが自動生成される。

```js
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      phoneNumber
      accountRepresentativeID
      ordersByDate {
        items {
          id
          customerID
          accountRepresentativeID
          productID
          status
          amount
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      ordersByStatusDate {
        items {
          id
          customerID
          accountRepresentativeID
          productID
          status
          amount
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
```

そしてフロントのコードで、この `GetCustomer` を呼び出すという流れになる。

これは上述の「答えが必要な質問が分かるまで、スキーマの設計を開始しないでください」を典型的に守っている気がする。

スキーマには「どのキーでorderが発行されるのか」「どのモデルがリレーションを持つのか」をあらかじめ定義する必要があり、それはアクセスパターンにほかならない。

そしてこのスキーマの遵守は、GraphQLによって担保される。

例えば、GraphQLによるUpdateは、`GetCustomer` と同様に `updateOrder` が生成され、それを通して行うことになるからだ。そこで更新可能なプロパティは当然制限される。

これは「NoSQLのデータ構造の柔軟性を損なう」とも取れると思うが、そこまでの柔軟性を求めていないケースだとしたらメリットが大きいし、だいたいのWebアプリはそういうケースなんじゃないかと思う。

# 最後に

いつかこの考えに対する「実装した上で」のアンサーを書きたい。

# 参考

- [DynamoDB に合わせた NoSQL 設計](https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/bp-general-nosql-design.html)
- [DynamoDB でリレーショナルデータをモデル化するための最初のステップ](https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/bp-modeling-nosql.html)
- [DynamoDB でリレーショナルデータをモデル化するためのベストプラクティス](https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/bp-relational-modeling.html)
- [Data access patterns](https://docs.amplify.aws/cli/graphql-transformer/dataaccess)
- [firebaseでちゃんと開発してみた](https://qiita.com/takyam/items/2b5c3ae8b28b9b27d4bb)
- [Amplify vs Firebase 比較してみた](https://qiita.com/h1guchi/items/4c4fc1b11580b76409b9)
- [Cloud Firestoreの勘所 パート2 — データ設計](https://medium.com/google-cloud-jp/firestore2-920ac799345c)
