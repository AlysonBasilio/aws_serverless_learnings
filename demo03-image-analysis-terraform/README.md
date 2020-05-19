# Second Example: Creating an AWS lambda function using terraform

docker run --rm -v $(pwd):/app -v ~/.aws:/root/.aws --workdir /app -it terraform-aws

```
cd image-analysis
zip -r function.zip handler.js node_modules
cd ..
mv image-analysis/function.zip .
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply -auto-approve
aws lambda invoke --function-name main --log-type Tail lambda-exec.json
terraform destroy -auto-approve
```
