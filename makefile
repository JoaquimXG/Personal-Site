S3_BUCKET_PROD=xjg.prod.mysite
S3_URL_PROD=s3://${S3_BUCKET_PROD}
S3_BUCKET_TEST=xjg.test.mysite
S3_URL_TEST=s3://${S3_BUCKET_TEST}
DISTRIBUTION_ID=E155MXZDZ2UE56
DISTRIBUTION_ID_TEST=E3JJQ6241NQ4R4
CERT_DIR=`pwd`/certs
CERT_PREFIX=fileb://${CERT_DIR}
CERT_EMAIL=joaquim.q.gomez@gmail.com
DOMAIN=joaquimgomez.com
ZONE_ID=Z05872891QSB14YHO2BQ9
CERT_ID=arn:aws:acm:us-east-1:479916576255:certificate/ee1ccaa9-63f3-417c-b85c-3a33868c0f0b
CACHE_CONTROLLED=_elderjs svg font
CACHE_CONTROL_AGE=86400

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
	for folder in ${CACHE_CONTROLLED}; do \
		aws s3 sync --delete public/$$folder ${S3_URL_PROD}/$$folder --cache-control max-age=${CACHE_CONTROL_AGE}; \
	done
	aws s3 sync --delete public ${S3_URL_PROD}
	aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION_ID} --paths '/*' > /dev/null

.PHONY: deploy-test
deploy-test:
	$(MAKE) build
	for folder in ${CACHE_CONTROLLED}; do \
		aws s3 sync --delete public/$$folder ${S3_URL_TEST}/$$folder --cache-control max-age=${CACHE_CONTROL_AGE}; \
	done
	aws s3 sync --delete public ${S3_URL_TEST}
	aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION_ID_TEST} --paths '/*' > /dev/null

.PHONY: clean-prod
clean-prod:
	aws s3 rm --recursive ${S3_URL_PROD}

.PHONY: clean-test
clean-test:
	aws s3 rm --recursive ${S3_URL_TEST}

# Setup up Certificate and deploy cert to ACM
# Certificate is for *.joaquimgomez.com and joaquimgomez.com
# When testing, site should use on x.joaquimgomez.com
# On live, site should use both joaquimgomez.com and www.joaquimgomez.com
.PHONY: refresh-cert
refresh-cert:
	$(MAKE) cert
	$(MAKE) upload-cert

.PHONY: cert
cert:
	certbot certonly --key-type rsa --rsa-key-size 2048 --non-interactive --agree-tos --dns-route53 -d *.${DOMAIN} -d ${DOMAIN} --email ${CERT_EMAIL} --work-dir ${CERT_DIR} --config-dir ${CERT_DIR} --logs-dir ${CERT_DIR}

.PHONY: upload-cert
upload-cert:
	aws acm import-certificate --certificate-arn '${CERT_ID}' --region us-east-1 --certificate-chain ${CERT_PREFIX}/live/${DOMAIN}/fullchain.pem --private-key ${CERT_PREFIX}/live/${DOMAIN}/privkey.pem --certificate ${CERT_PREFIX}/live/${DOMAIN}/cert.pem > /dev/null

# No longer required as using Route53 plugin for certbot
# .PHONY: set-acme-root
# set-acme-root:
# 	aws route53 change-resource-record-sets --hosted-zone-id ${ZONE_ID} --change-batch "`cat ./certs/acme_record_set-root.json`"

# .PHONY: set-acme-www
# set-acme-www:
# 	aws route53 change-resource-record-sets --hosted-zone-id ${ZONE_ID} --change-batch "`cat ./certs/acme_record_set-www.json`"
