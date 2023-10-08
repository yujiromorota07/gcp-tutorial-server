#### コンテナのビルド

```
docker build -t gcp-tutorial-server .
```

or

```
docker buildx build --platform linux/amd64 -t gcp-tutorial-server .
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

### gcp 用にタグ付け

```
docker tag gcp-tutorial-server asia.gcr.io/morota-gcp-tutorial/gcp-tutorial-server
```

### docker と gcp の情報を連携

```
gcloud auth configure-docker
```

### gcp に image を push

```
docker push asia.gcr.io/morota-gcp-tutorial/gcp-tutorial-server
```
