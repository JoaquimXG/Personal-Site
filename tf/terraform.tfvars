# General
region = "eu-west-2"

default_tags = {
  project = "mysite"
  env     = "prod"
}

# Site
site_s3_origin_id = "S3 Origin"

site_bucket_name = "xjg.prod.mysite"

site_domain = "joaquimgomez.com"

site_subdomain = "mysite"

certificate_id = "arn:aws:acm:us-east-1:479916576255:certificate/ee1ccaa9-63f3-417c-b85c-3a33868c0f0b"
