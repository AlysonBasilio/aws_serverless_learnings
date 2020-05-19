provider "aws" {
  region = "us-east-1"
}

resource "aws_iam_role" "example_lambda_role" {
  name = "example_lambda_role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_lambda_function" "hello_cli" {
  filename      = "function.zip"
  function_name = "hello_cli"
  role          = aws_iam_role.example_lambda_role.arn
  handler       = "index.handler"

  source_code_hash = filebase64sha256("function.zip")

  runtime = "nodejs12.x"
}
