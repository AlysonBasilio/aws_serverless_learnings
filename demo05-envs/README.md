# Creating a AWS lambda triggered by a scheduler

docker run --rm -v $(pwd):/app -v ~/.aws:/root/.aws --workdir /app -it node-sls-aws

```
cd lambda-environment
sls deploy --stage qa
sls remove --stage qa
```
