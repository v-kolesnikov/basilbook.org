.PHONY: deploy
deploy: build
	aws --endpoint-url=https://storage.yandexcloud.net s3 sync --delete --profile=basilbook public/ s3://basilbook.org/

.PHONY: build
build: css
	hugo --baseUrl https://basilbook.org/ --cleanDestinationDir

.PHONY: css
css:
	npm run build
