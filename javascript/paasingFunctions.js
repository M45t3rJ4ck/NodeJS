function callFunction(fun){
  fun();
};

var sayBye = function(){
  console.log("Bye");
};

callFunction(sayBye);
