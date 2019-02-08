var express = require("express");

var app = express();

app.get("/Home", function(req, res){
  res.send("Welcom Home - To Our Page!");
});

app.get("/Contact", function(req, res){
  res.send("Phone Home - And Ask Us Anything!");
});

app.get("/Profile/:Id", function(req, res){
  res.send("You've requested to see Profile with an Id of: " + req.params.Id);
});

app.listen(3000);

console.log("Now listening bru, speak up..")
