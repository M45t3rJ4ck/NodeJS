//TO BE LEFT AS BLANK FILE FOR WIRTING AND TESTING PURPOSE ONLY
var express = require("express");

var app = express();

app.engine('ejs', require('ejs').renderFile);

app.set("view engine", "ejs");

app.use("/assets", express.static("assets"));

app.get("/home", function(req, res){
  res.render("index");
});

app.get("/contact", function(req, res){
  res.render("contact", {qs: req.query});
});

app.get("/profile/:name", function(req, res){
  var data = {age: 69, job:"sheep", hobbies: ['eating', 'coding', 'coffee']};
  res.render("profile", {person: req.params.name, data: data});
});

app.listen(3000);

console.log("Now listening bru, speak up..")
