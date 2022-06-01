
let x = 3
let y = 3
console.log(x===y);

let isNigerian = false;
console.log(!isNigerian);


console.log(3 != 2);
console.log(3 !== "3");

function greater(a, b) {
  return a > b;

}
let result = greater(1, 2)
console.log(result);

// function division(num1, num2) {
//   if(num2 == 0) {
//     return 'Enter non-zero denominator'
//   }
//   return num1/num2;
// }
// console.log(division(1, 0));

function division(num1, num2) {
  if(num2 !== 0) {
    return num1/num2;
  }
  return 'Enter non-zero denominator'
}
console.log(division(1, 0));