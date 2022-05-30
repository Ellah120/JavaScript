// Release1 Question1
function greetWorld(){
  let greeting = "Hello World!"
  console.log(greeting);
}
greetWorld();


// Realease1 Question2
function FirstFunction(){
  let message = "Finding Fanny"
  return message
}
FirstFunction();

// Release1 Question3
function add(number1, number2){
  let sum = number1 + number2;
  return sum;
}

// Release1 Question4
(function(){
  var a=b=5
})();
console.log(b);


// Release1 Question5
console.log("Hello".repeat(3));


// Release1 Question6
function test(){
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo(){
    return 2;
  }
}
test();
