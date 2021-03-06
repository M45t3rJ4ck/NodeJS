var http = require("http");

var fs = require("fs");

var server = http.createServer(function(req, res){
  console.log("A request was made: " + req.url);
  if  (req.url === "/home" || req.url === "/"){
    res.writeHead(200, {"Content-Type":  "text/html"});
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  } else if (req.url === "/members") {
    var members = [{name: "Willem",  age: 36}, {name: "Adriaan", age:36}];
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(members));
  } else {
    res.writeHead(404, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  };
});

server.listen(3000, "127.0.0.1");

console.log("Hey bru, I'm now listening to on port 3000.");
