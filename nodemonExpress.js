var express = require("express");

var app = express();

app.get("/", function(req, res){
  res.send("Welcom Home - To Our Page!");
});

app.get("/Contact", function(req, res){
  res.send("Phone Home - And Ask Us Anything!");
});

app.listen(3000);
