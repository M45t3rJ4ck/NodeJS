var http = require("http");

var fs = require("fs");

var server = http.createServer(function(req, res){
  console.log("A request was made: " + req.url);
  res.writeHead(200, {"Content-Type": "text/plain"});
  var myReadStream = fs.createReadStream(__dirname + "/readMeText.txt", "utf8");
  myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");

console.log("Hey bru, I'm now listening to on port 3000.");
