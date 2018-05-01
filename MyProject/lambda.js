let AWS = require('aws-sdk');
let uuid = require('uuid');
exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed BXY' + uuid.v4());
}