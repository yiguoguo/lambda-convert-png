/*
 * @Date: 2022-10-21 13:50:33
 * @LastEditors: wangyi
 * @LastEditTime: 2022-10-21 14:24:24
 * @FilePath: /convert-png/test.js
 */

const lambdaLocal = require("lambda-local");
const path = require("path");

var jsonPayload = {
    "pdf":"https://s3.ap-southeast-2.amazonaws.com/eiz.labels/labels/2022/10/20/6350d633462dc11007592.pdf"
}

lambdaLocal.execute({
    event: jsonPayload,
    lambdaPath: path.join(__dirname, 'index.js'),
    profilePath: '~/.aws/credentials',
    profileName: 'default',
    timeoutMs: 10000
}).then(function(done) {
    console.log(done);
}).catch(function(err) {
    console.log(err);
});