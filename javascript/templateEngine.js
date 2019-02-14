var express = require("express");

var app = express();

app.engine('ejs', require('ejs').renderFile);

app.set("view engine", "ejs");

app.get("/home", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function(req, res){
  res.sendFile(__dirname + "/contact.html");
});

app.get("/profile/:name", function(req, res){
  var data = {age: 69, job:"Sheep"};
  res.render("profile", {person: req.params.name, data: data});
});

app.listen(3000);

console.log("Now listening bru, speak up..")
