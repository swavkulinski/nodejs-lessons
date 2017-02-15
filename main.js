var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'ContentType':'application/json'});
    response.end('{"myMock":{"a":1,"b":2}}');
}).listen(8081);

console.log("Server running on http://localhost:8081/");