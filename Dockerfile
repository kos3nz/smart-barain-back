# docker 使用例
### 開発用コンテナの構築
# FROM node:12

# ワーキングディレクトリの設定
# WORKDIR /node-app

# 初期設定(package.json生成)
# RUN npm init -y

# expressインストール
# RUN npm install express

# テスト環境(jest, mocha, supertest)インストール
# RUN npm install jest mocha supertest

FROM node:12

# the directory in the container that I wanna work out of
WORKDIR /usr/src/smart-brain-api

# copy everything
COPY ./ ./

RUN npm install

CMD [ "/bin/bash" ]