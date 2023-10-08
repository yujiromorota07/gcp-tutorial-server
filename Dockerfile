# ベースイメージをNode.js 18に変更
FROM node:18

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# 依存関係のファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# TypeScriptをJavaScriptにコンパイル
RUN npm run build

# 環境変数 PORT を設定 (Cloud Run が使用)
ENV PORT 8080

# コンテナを起動する際のコマンドを指定
CMD [ "node", "dist/index.js" ]
