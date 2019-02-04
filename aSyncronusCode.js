//aSyncronus Code - read & writing files.
//THIS FILE IS TO ACOMPANY readMe1.txt & writeMe1.txt.
var fs = require("fs");

fs.readFile("readText.txt", "utf8", function(err, data){
  fs.writeFile("writeText.txt", data, (err) => {
    if (err) throw err;
    console.log("File was saved.")
  });
});

//this line will execute first before reading & writing was done.
console.log("testing");
