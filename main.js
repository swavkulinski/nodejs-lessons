var fs = require("fs");
var data = 'Output content to be written\n';

var readStream = fs.createReadStream('input.txt')
var writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

console.log('Program ended');