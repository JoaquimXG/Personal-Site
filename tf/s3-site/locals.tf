locals {
  full_domain = "${var.dns.subdomain == "" ? "" : "${var.dns.subdomain}."}${var.dns.domain}"
}
