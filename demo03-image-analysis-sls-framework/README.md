# First Example: Creating an AWS lambda function using

docker run --rm -v $(pwd):/app -v ~/.aws:/root/.aws --workdir /app -it node-sls-aws

```
sls (Select Y, AWS Node.js, image-analysis, n, n)
cd image-analysis
npm init -y
npm i aws-sdk
sls deploy
sls invoke -f image-analysis --path request.json --log
sls invoke local -f image-analysis --path request.json
sls remove
```
