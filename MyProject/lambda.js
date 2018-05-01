let AWS = require('aws-sdk');
let uuid = require('uuid');
exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed B' + uuid.v4());
}