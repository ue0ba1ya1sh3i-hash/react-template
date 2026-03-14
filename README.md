# react-template

## 目次
- [概要](#概要)
- [使用技術](#使用技術)
- [セットアップ方法](#セットアップ方法)
- [ファイル構成](#ファイル構成)
- [ライセンス](#ライセンス)
- [ルール](#ルール)

## 概要
<p align="center">
  <img src="./description/screenshots/ja/1.png" width="70%">
</p>

<p align="center">
  <img src="./description/screenshots/ja/2.png" width="70%">
</p>

- 作者がフルスタックプロジェクト作成の簡易化のために作成したReactのテンプレートです。
- Shadcn UI Tailwind CSSなどを使用してモダンでシンプルなデザインを実現しています。
- 他にもFirebaseでバックエンド(Functions)やデータ(Firestore)を管理させてセキュアで開発体験がよくなるようになっています。

## 使用技術
- 以下は使用する技術を書いています。どれもシンプルでモダンな技術となっています。

## セットアップ方法
- Node.jsとJavaのインストールとプロジェクトの依存関係のインストール
  - こちらは省略させていただきます
  - JavaはFirebase emulatorを起動するため必要です。

- Firebaseプロジェクトの作成
  - Firebase Consoleにアクセスしてプロジェクトを作成してください。
  - Functionsを使うのでBlazeプランにしてください。
  - AuthでEmail・Google・匿名のログイン方法を有効にしてください。

- Firebase CLIにログイン
  - `npm install -g firebase-tools`でFirebase CLIをインストールしてください。
  - `firebase login`でプロジェクトを作成したアカウントでログインしてください。
  - `.firebaserc`を自分のプロジェクトIDに変更してください。

- scripts/secret.jsonの設定
  - Firebase Consoleでプロジェクトの設定のサービスアカウントに移動してください。
  - Firebase Admin SDKの新しい秘密鍵を作成を押してダウンロードしたJSONの名前を`secret.json`に変更してルートディレクトリ配下に配置してください。

- Firestoreの初期データの作成
  - `npm run emulator`でエミュレーターを起動しておいてください。

- セットアップコマンドの実行
  - `npm run setup`で`Normal setup`を選んで画面の通りにいろいろ入力してください。

- テーマカラー・アイコンの設定
  - `public/files/icons/icon.svg`と`src/component/mine/parts/mine.tsx`の両方を更新してアイコンを設定してください。
  - 現在のテーマカラーは紫色(白・黒両対応)になっています。変えたい人は`src/index.css`で編集してください。

- ルートページの編集
  - `src/pages/index.tsx`にあるお知らせ文は削除してどんどん編集してください。
    - `src/translate/ja.json`と`en.json`にあるお知らせ文も削除しておいてください。

- GitHubに公開&Cloudflare Pagesの接続
  - GitHubにプロジェクトを公開してください。
  - Cloudflare PagesにGitHub経由でリポジトリを接続して下さい。
  - フレームワークは`React(Vite)`を選択して環境変数も記入してください。
  - 保存してデプロイしてください。

## ファイル構成
- ほぼすべてのファイルの最初にコメントでそのファイルの説明を書いています。
- 説明不要なファイルは省かせていただきます。
  - もしコメントされていなくて下にも書かれていなければ調べてみてください。
- コメントできないファイルは以下に説明をまとめておきます。
  - indexとついたファイル
    - 基本的に何かのメインファイルです。
  - functions/src/secret.json
    - `secret.json`のコピーです。
    - `functions`でFirebase adminを使うためにセットアップスクリプトが生成したものです。
  - description
    - このREADMEのためのフォルダーです。消しても構いません。
  - public/files/icons/icon.svg
    - `index.html`のアイコンの画像です。
    - あなたの画像に変更して下さい。

## ライセンス
  - このプロジェクトはMIT Licenseのもとで公開されています。

## ルール
- 以下は守るとコードとデザインに一貫性が出ます。
- [コードに関するルール](./rules/code.md)
- [デザインに関するルール](./rules/design.md)
