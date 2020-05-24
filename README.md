# AWS Serverless Learnings

This is a repository to store what I've learned studying serverless applications

## Used Tools
- Docker
- Node
- Terraform
- Serverless Framework

## How to prepare yourself to use this repository

### Setup your AWS Account

- [Create an AWS account](https://portal.aws.amazon.com/billing/signup?e=gs&p=gsrc#/start)
- [Install AWS CLI](https://aws.amazon.com/pt/cli/)
- [Setup your local development environment](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

### Setup Docker

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

### Setup Dockerized Terraform Environment

Select what Terraform version you will use and download it.

```
version=0.12.24
curl -OL https://releases.hashicorp.com/terraform/"$version"/terraform_"$version"_linux_amd64.zip
unzip terraform_"$version"_linux_amd64.zip
```

Now, build the terraform docker image that you will be using in our tasks

```
docker build --tag terraform-aws -f Dockerfile.terraform .
```

To test your image:

```
docker run --rm terraform-aws terraform --version
```

### Setup Dockerized Node+Serverless Environment

Build the node+serverless docker image that you will be using in our tasks

```
docker build -f Dockerfile.serverless --tag node-sls-aws .
```
