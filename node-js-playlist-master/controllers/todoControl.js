var bodyParser = require("body-parser");

var mongoose = require("mongoose");

mongoose.connect("mongodb://Shuan:1Sheep@ds125525.mlab.com:25525/todo", {useNewUrlParser: true});

var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model("Todo", todoSchema);

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get("/todo", function(req, res){
    Todo.find({}, function(err, data){
      if (err) throw err;
      res.render("todo", {todos: data});
    });
  });

  app.post("/todo", urlencodedParser, function(req, res){
    var newTodo = Todo(req.body).save(function(err, data){
      if (err) throw err;
      res.json({todos: data});
    });
  });

  app.delete("/todo/:item", function(req, res){
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne(function(err, data){
      if (err) throw err;
      res.json({todos: data});
    });
  });

};
