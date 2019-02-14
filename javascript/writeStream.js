var http = require("http");

var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMeText.txt", "utf8");

var myWriteStream = fs.createWriteStream(__dirname + "/writeMeText.txt");

myReadStream.on("data", function(chunk){
  console.log("New chunk received");
  myWriteStream.write(chunk);
});
