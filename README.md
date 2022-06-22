#  ゆめみフロントエンドコーディングテスト
デプロイ先：http://frontend-conding-test220622.vercel.app/
## 主要技術
- docker
- Nuxt 3
- TypeScript
### 主なライブラリ
- axios
- husky
- vitest
- highcharts (vue3-highcharts)

## 工夫点
- dockerを利用して環境構築を行うことで、特にnodeのバージョンの違いによって使用できるライブラリのバージョン等が違うため、ある人が入れたライブラリが他の人の環境で使えない問題など開発コストを減らし、アプリの提供機能の一貫性を高める
- huskyを用いてgitコミットの前にeslint・prettierを走らせることで、リモートレポジトリのコードのフォーマットの共通化を強制する
- github actionを用いて、eslint・prettierや自動テストを走らせることで、リモートレポジトリの状態が各自のローカル環境の状態に依存せずとも期待する状態であることを確認できる
- APIキーのセキュリティに関して、クライアント側からAPIキーを参照できないようにしたほうがAPI提供者に迷惑をかけないだろうと考え、Nuxt.jsのサーバ機能でRESAS APIサーバーへのリクエストを隠蔽するようにした。APIキーはサーバ側で読み込んでいる。
- デプロイ先のVercelは、 Nuxtjsを設定無しでデプロイでき、静的ホスティングだけでなくNuxtjsのサーバー機能が利用できるため、選択した
- テストコードは、その関数・コンポーネントが単体で動作できるかということを確認することを意識した。フロントエンドのテスト戦略に関して言えば、本当に確認すべきなのは最終的にユーザに提供されている部分であるため、ブラウザを使ったテストがそれに最も近いが単体・コンポーネントテストに比べてとても時間がかかる問題がある
- APIの取得に関して
  - 選択肢の都道府県リストは固定であることが明らかなので、アプリのロード時のみに取得する。 
  - 選択されている都道府県の人口構成をすべて取得するのではなく、新しく選択された場合のみその都道府県のデータだけを取得することで、RESAS APIへのリクエストを最小限にする


## 課題
- highchartsをcompositionAPIで使おうとすると上手く動かず、仕方なくoptionAPIを使用した。事前に試しておくべきだった。
- 時間に余裕を持って開発するべきだった。(環境整備やチャートの部分に時間を使ってしまった)
--- 
## APIキーの設定
.envというファイルをローカルで作成する
```
API_KEY=${your_api_key}
```
nuxtの機能で自動で読みこまれる
## 起動方法
- コンテナに入る
```
docker-compose up -d
docker-compose exec node sh
```
- コンテナ内でアプリの起動
```
npm install
npm run dev
```
- コンテナ内での開発
```
git config --global user.email "your github account email address"
git config --global user.name "your github  account name"
git remote set-url origin https://${github_username}:${github_token}
hub.com/masa5555/frontend_conding_test220622.git
```


###  Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.


---
The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
