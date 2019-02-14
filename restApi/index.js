const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/memberarea", {useNewUrlParser: true});

app.use(express.static("public"))

app.use(bodyParser.json());

const routes = require("./routes/api")

app.use("/api", routes);

app.use(function(err, req, res, next){
  res.status(404).send({error: err.message});
});

app.listen(process.env.port || 4000, function(){
  console.log(">>Now listening for any requests<<")
});
