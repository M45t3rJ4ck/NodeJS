var http = require("http");

var server = http.createServer(function(req, res){
  console.log("A request was made: " + req.url);
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hey Bru!");
});

server.listen(3000, "127.0.0.1");

console.log("Hey bru, now listening to port 3000");
