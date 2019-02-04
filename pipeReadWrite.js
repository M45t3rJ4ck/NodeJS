var http = require("http");

var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMeText.txt", "utf8");

var myWriteStream = fs.createWriteStream(__dirname + "/writeTextMe.txt");

myReadStream.pipe(myWriteStream);
