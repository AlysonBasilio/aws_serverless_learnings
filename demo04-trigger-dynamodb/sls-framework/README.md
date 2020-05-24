# First Example: Creating an AWS lambda function using

docker run --rm -v $(pwd):/app -v ~/.aws:/root/.aws --workdir /app -it node-sls-aws

```
cd trigger-dynamo
sls deploy
npm run invoke
sls remove
```
