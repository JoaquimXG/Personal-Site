
variable "s3_origin_id" {
  type = string
}

variable "bucket_name" {
  type = string
}

variable "dns" {
  type = map(string)
  # default = {
  #   subdomain = "subdomain"
  #   domain = "x.com"
  # }
}

variable "acm_cert_id" {
  type = string
}

variable "bucket_tags" {
  type        = map(string)
  description = "Tags to apply to the site bucket"
  default     = {}
}

variable "distribution_tags" {
  type        = map(string)
  description = "Tags to apply to the site distribution"
  default     = {}
}
