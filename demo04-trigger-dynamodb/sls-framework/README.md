# First Example: Creating an AWS lambda function using

docker run --rm -v $(pwd):/app -v ~/.aws:/root/.aws --workdir /app -it node-sls-aws

```
sls (Select Y, AWS Node.js, trigger-dynamo, n, n)
cd trigger-dynamo
sls deploy
sls invoke -f heroes-insert --log
sls invoke local -f heroes-insert
sls remove
```
