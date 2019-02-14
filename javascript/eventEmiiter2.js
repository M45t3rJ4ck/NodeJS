//THIS FILE IS TO ACOMPANY eventEmitter.js FILE
var events = require("events");

var util = require("util");

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var James = new Person("James");
var Peter = new Person("Peter");
var Clive = new Person("Clive");

var People = [James, Peter, Clive];

People.forEach(function(Person){
  Person.on("speak", function(mssg){
    console.log(Person.name + " said : " + mssg);
  });
});

James.emit("speak", "Hey Bru...");
Peter.emit("speak", "Hook is dead!");
Clive.emit("speak", "Got some blunt?")
