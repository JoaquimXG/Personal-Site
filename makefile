S3_BUCKET=xjg.prod.mysite
S3_URL=s3://${S3_BUCKET}
CERT_PREFIX=fileb://`pwd`
DOMAIN=joaquimgomez.com
ZONE_ID=Z05872891QSB14YHO2BQ9
CERT_ID=arn:aws:acm:us-east-1:479916576255:certificate/ee1ccaa9-63f3-417c-b85c-3a33868c0f0b

.PHONY: clean
clean:
	-rm -rf public/*
	-rm -rf ___ELDER___

.PHONY: build
build:
	$(MAKE) clean
	yarn run build

.PHONY: deploy
deploy:
	$(MAKE) build
	aws s3 sync public ${S3_URL} --acl public-read

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
