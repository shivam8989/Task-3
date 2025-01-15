# Task-3
 AWS Lambda 
 # AWS Lambda Functions for Number Addition and File Upload to S3

This repository contains two AWS Lambda functions:
1. **Add Two Numbers Lambda**: Adds two numbers and returns the result.
2. **Upload Document to S3 Lambda**: Uploads a document (PDF or other file types) to an S3 bucket.

## Prerequisites

Before deploying the Lambda functions, ensure you have the following:
- An AWS account.
- An IAM role with the necessary permissions:
  - `lambda.amazonaws.com` to invoke the Lambda functions.
  - `s3:PutObject` permission to upload files to the S3 bucket.
- AWS CLI or AWS Management Console access to deploy and test the Lambda functions.

## Lambda Functions

### 1. Add Two Numbers Lambda

This Lambda function takes two numbers as input, adds them together, and returns the sum.

#### Function Input:
- **num1**: The first number (integer or float).
- **num2**: The second number (integer or float).

#### Function Output:
- Returns the sum of `num1` and `num2` in JSON format.

#### Example Input:

```json
{
  "num1": 5,
  "num2": 10
}

