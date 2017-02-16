var fs = require("fs");
var data = '';

var readStream = fs.createReadStream('input.txt');

readStream.setEncoding('UTF8');

readStream.on('data', function (chunk){
    data +=chunk;
});

readStream.on('end', function(){
    console.log(data);
});

readStream.on('error', function(error){
    console.error(error);
});

console.log('Program ended');