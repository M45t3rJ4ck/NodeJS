var fs = require("fs");

fs.mkdir("stuff", function(){
  fs.readFile("readMe.txt", "utf8", function(err, data){
    fs.writeFile("./stuff/writeMe2.txt", data, (err) => {
      if (err) throw err;
      console.log("Directory was created.")
    });
  });
});

//fs.unlink("./stuff/writeMe2.txt", function(){
//  fs.rmdir("stuff")
//});
