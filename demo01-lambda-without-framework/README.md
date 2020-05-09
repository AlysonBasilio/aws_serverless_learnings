# First Example: Creating an AWS lambda function using terraform

```
zip function.zip index.js
docker run --rm -v $(pwd):/app terraform-aws terraform init
docker run --rm -v $(pwd):/app terraform-aws terraform fmt
docker run --rm -v $(pwd):/app terraform-aws terraform validate
docker run --rm -v $(pwd):/app terraform-aws terraform plan
docker run --rm -v $(pwd):/app terraform-aws terraform apply -auto-approve
aws lambda invoke --function-name hello_cli --log-type Tail lambda-exec.log
docker run --rm -v $(pwd):/app terraform-aws terraform destroy -auto-approve
```
