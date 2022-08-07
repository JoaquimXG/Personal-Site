S3_BUCKET_PROD=xjg.prod.mysite
S3_URL_PROD=s3://${S3_BUCKET_PROD}
S3_BUCKET_TEST=xjg.test.mysite
S3_URL_TEST=s3://${S3_BUCKET_TEST}
CERT_PREFIX=fileb://`pwd`
DOMAIN=joaquimgomez.com
ZONE_ID=Z05872891QSB14YHO2BQ9
CERT_ID=arn:aws:acm:us-east-1:479916576255:certificate/ee1ccaa9-63f3-417c-b85c-3a33868c0f0b

.PHONY: clean
clean:
	-rm -rf public/*
	-rm -rf ___ELDER___

# Initial deployment of infrastructure
# Ensure AWS creds are in env
.PHONY: tf-init
	cd tf
	terraform init

.PHONY: init-prod
init-prod:
	$(MAKE) tf-init
	-cd tf && terraform workspace new prod
	cd tf && terraform workspace select prod
	cd tf && terraform apply -auto-approve -var-file=./env/prod.tfvars

.PHONY: init-test
init-test:
	$(MAKE) tf-init
	-cd tf && terraform workspace new test
	cd tf && terraform workspace select test
	cd tf && terraform apply -auto-approve -var-file=./env/test.tfvars

.PHONY: destroy-test
destroy-test:
	cd tf && terraform workspace select test
	cd tf && terraform destroy -auto-approve -var-file=./env/test.tfvars

# Deploy changes
.PHONY: build
build:
	$(MAKE) clean
	yarn run build

.PHONY: deploy-prod
deploy-prod:
	$(MAKE) build
	aws s3 sync public ${S3_URL_PROD}

.PHONY: deploy-test
deploy-test:
	$(MAKE) build
	aws s3 sync public ${S3_URL_TEST}

# Setup up Certificate and deploy cert to ACM
# Certificate is for *.joaquimgomez.com and joaquimgomez.com
# When testing, site should use on x.joaquimgomez.com
# On live, site should use both joaquimgomez.com and www.joaquimgomez.com
.PHONY: cert
cert:
	certbot certonly --manual --preferred-challenges dns -d *.${DOMAIN} -d ${DOMAIN} --work-dir ./certs --config-dir ./certs --logs-dir ./certs

.PHONY: set-acme-root
set-acme-root:
	aws route53 change-resource-record-sets --hosted-zone-id ${ZONE_ID} --change-batch "`cat ./certs/acme_record_set-root.json`"

.PHONY: set-acme-www
set-acme-www:
	aws route53 change-resource-record-sets --hosted-zone-id ${ZONE_ID} --change-batch "`cat ./certs/acme_record_set-www.json`"

.PHONY: upload-cert
upload-cert:
	aws acm import-certificate --certificate-arn '${CERT_ID}' --region us-east-1 --certificate-chain ${CERT_PREFIX}/certs/live/${DOMAIN}/fullchain.pem --private-key ${CERT_PREFIX}/certs/live/${DOMAIN}/privkey.pem --certificate ${CERT_PREFIX}/certs/live/${DOMAIN}/cert.pem
