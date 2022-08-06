S3_BUCKET=xjg.prod.mysite
S3_URL=s3://${S3_BUCKET}
CERT_PREFIX=fileb://`pwd`

.PHONY: clean
clean:
	-rm -rf public/*
	-rm -rf ___ELDER___

.PHONY: deploy
deploy:
	aws s3 sync public ${S3_URL} --acl public-read

.PHONY: cert
cert:
	certbot certonly --manual --preferred-challenges dns -d joaquimgomez.com -d www.joaquimgomez.com --work-dir ./certs --config-dir ./certs --logs-dir ./certs

.PHONY: set-acme-root
set-acme-root:
	aws route53 change-resource-record-sets --hosted-zone-id Z05872891QSB14YHO2BQ9 --change-batch "`cat ./certs/acme_record_set-root.json`"

.PHONY: set-acme-www
set-acme-www:
	aws route53 change-resource-record-sets --hosted-zone-id Z05872891QSB14YHO2BQ9 --change-batch "`cat ./certs/acme_record_set-www.json`"

.PHONY: upload-cert
upload-cert:
	aws acm import-certificate --certificate-arn 'arn:aws:acm:us-east-1:479916576255:certificate/31c81b23-f32f-4135-8e67-75394d21849f' --region us-east-1 --certificate-chain ${CERT_PREFIX}/certs/live/joaquimgomez.com/fullchain.pem --private-key ${CERT_PREFIX}/certs/live/joaquimgomez.com/privkey.pem --certificate ${CERT_PREFIX}/certs/live/joaquimgomez.com/cert.pem
