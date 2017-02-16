var fs = require("fs");
var data = 'Output content to be written\n';

var writeStream = fs.createWriteStream('input.txt');

writeStream.write(data,'UTF8');
writeStream.end();

writeStream.on('finish', function(){
    console.log('Write completed!');
});

writeStream.on('error', function(error){
    console.error(error);
});

console.log('Program ended');