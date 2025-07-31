<!--
 * @Date: 2022-10-21 16:08:35
 * @LastEditors: wangyi
 * @LastEditTime: 2022-10-25 10:17:36
 * @FilePath: /lambda-convert-png/README.md
-->
# lambda-convert-png

```shell
# examples 1
node test.js
# examples 2
lambda-local -l index.js -h handler --watch 8008

curl --request POST \
  --url http://localhost:8008/ \
  --header 'content-type: application/json' \
  --data '{
	"event": {
		"pdf": "https://s3.ap-southeast-2.amazonaws.com/6350d633462dc11007592.pdf"
	}
}'
```
build
```shell
docker-compose run --rm lambda  node -v
```
