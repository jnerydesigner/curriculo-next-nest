provider "aws" {
  access_key = "AKIA3COFNU5NKNYSJE6G"
  secret_key = "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"
  region     = "us-east-1"
}

resource "aws_s3_bucket" "bucket" {
  bucket = "curriculo-bucket"
  tags = {
    Name = "curriculo-bucket"
    Env  = "development"
  }
}

resource "aws_s3_bucket_object" "object" {
  bucket = aws_s3_bucket.bucket.id
  key    = "hello.txt"
  source = "/home/jandernery/Projects/youtube/curriculo/backend_curriculo/hello.txt"
  etag   = filemd5("/home/jandernery/Projects/youtube/curriculo/backend_curriculo/hello.txt")
}


