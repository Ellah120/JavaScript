function add(num1, num2){
  return num1 + num2
}

function subtract(num1, num2){
  return num1 - num2
}

function multiply(num1, num2){
  return num1 * num2
}

function divide(num1, num2){
  if(num2 === 0){
    return "Enter non-zero denominator"
  }
  return num1 / num2
}

function modulus(num1, num2){
  return num1 % num2
}
function calculator(num1, num2, operation){
  return operation(num1,num2)
}
let result = calculator(3,3,add);
console.log(result);
