//SECOND METHOD FOR EXPORTING DATA:
module.exports.counter = function(arr){
  return "There are " + arr.length + "elements in the array";
};

module.exports.adder = function(a, b){
  return `The sum of the 2 numbers are ${a + b}`;
};

module.exports.pi = 3.142;

//THIRD METHOD FOR EXPORTING DATA
//module.exports = {
//counter: counter,
//adder: adder,
//pi: pi,
//};
