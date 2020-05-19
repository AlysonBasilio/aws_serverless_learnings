# First Example: Creating an AWS lambda function using terraform

docker run --rm -v $(pwd):/app -v ~/.aws:/root/.aws --workdir /app -it terraform-aws

```
zip function.zip index.js
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply -auto-approve
aws lambda invoke --function-name hello_cli --log-type Tail lambda-exec.log
terraform destroy -auto-approve
```
