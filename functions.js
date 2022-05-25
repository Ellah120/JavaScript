//  For function block, you have to create the function block and give the function a name. In this case we used 'greet'. Then we used var to assign the names. Note for the lastname the var was done outside the function block but the console.log for the lastname was done within the function block this means var is a global scope(it can be used anywhere on the program). 
 function greet(){
  var firstName = "Ellah"
   console.log(firstName);
     console.log(lastName);
 }

 var lastName = "Johnson";

// After creating the function block we have to call the function. This simply means typing out the name of the function so that the console log would print the info given to it by var
 greet();



// In this case, we created a function block and named it 'greet' and then assigned a command that the greet is for a name, this means our text must be in string form and also we dont need the var here, we just simply write whatever name we want when we call the function. and we print out with console(this is included in the function block).We also added a string inside the console(this is telling the console to attach the string to whatever name we input).
 function greet(name){
 console.log("Hello" ,name);
 }
 greet("Ellah");
 greet("Ben");



//  This is a function that has its name as add and then the function is stating that we should input two values(add them) and there is also a command in the function block stating that the result gotten from the addition of the two numbers should be returned incase we want to use again.
//  function add(num1, num2){
//   return num1 + num2;
//  }
// var result = add(1,2);
// console.log('result', result)


// Repeat same for subtraction
 function subtract(num1,num2){
 return num1-num2;
 }
var result = subtract(4,2)
console.log('result', result)


// Repeat for Multiplication now using 'let'
function multiply(num1, num2){
  return num1 * num2;
 }
let result1 = multiply(4,2);
 console.log('result',result1);


//  For division
 function division(num1, num2){
  return num1 / num2;
 }
 var result = division(4,2);
console.log('result',result);


// For exponent
 function exponent(num1, num2){
  return num1 ** num2;
 }
 var result = exponent(4,2);
 console.log('result',result);


//  For modulus.... modulus is used to differentiate even and odd numbers, and it inputs the reminder of the two numbers after division.
 function modulus(num1, num2){
   return num1 % num2;
 }
 var result = modulus(4,2);
 console.log('result',result);


// here it shows that 'const' variable cannot be UPDATED neither can it be redeclared....note var can be updated and redeclared, let can be updated but not redeclared
 const firstName = "Ellah";
 console.log(firstName);

// firstName = "Susan";
//  console.log(firstName);


// From henceforth we've dropped the var variable and adopted the let variable and we are also using function expression not function declaration anymore also we are using the arrow function notation. For this we used the multiple line arrow function
 let add = (num1, num2) => {
   let sum = num1 + num2;
   return sum;
 }
 let sum = add(1,2);
 console.log('result', sum);

 let subtract = (num1, num2) => {
  let result = num1 - num2;
  return result;
 }

 let multiply = (num1, num2) => num1 * num2;

 let division = (num1, num2) => num1 / num2;

 let exponent = (num1, num2) => num1 ** num2;

 let modulus = (num1, num2) => num1 % num2;