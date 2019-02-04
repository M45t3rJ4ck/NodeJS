//Syncronus Code - read & writing files
//THIS FILE IS TO ACOMPANY readMe.txt & writeMe.txt

var fs = require("fs");

var readMe = fs.readFileSync("readMe.txt", "utf8");
console.log(readMe);

var writeMe = fs.writeFileSync("writeMe.txt", readMe);

//this line will only execute after reading & writing has been done.
console.log("testing");
