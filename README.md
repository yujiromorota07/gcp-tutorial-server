#### コンテナのビルド

```
docker build -t gcp-tutorial-server .
```

### ローカルでコンテナを動かす

```
docker run -d -p 8080:8080 gcp-tutorial-server
```

### サーバーを止める

```
docker ps
docker stop [CONTAINER ID or CONTAINER NAME]
```
