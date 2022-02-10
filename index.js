var string = 'some string';
var crypto = require('crypto');
var hash = crypto.createHash('md5').update(string).digest('hex');
console.log(hash);