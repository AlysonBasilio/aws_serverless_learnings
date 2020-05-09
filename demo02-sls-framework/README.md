# First Example: Creating an AWS lambda function using 

docker build --tag node-sls-aws .
docker run --rm -v $(pwd):/app -v ~/.aws:/root/.aws --workdir /app -it node-sls-aws

```
sls
cd hello-sls
sls deploy
sls invoke -f hello [--log]
sls invoke local -f hello
sls remove
```
