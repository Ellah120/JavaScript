// this is used to bound "this" to a particular function so that if the value should change it wont affect the function.

// without the bind()
// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstname}!`);
//   }
// };

// setTimeout(() => user.sayHi(), 1000);

// it prints out "Another user in setTimeout"
// user = {
//   sayHi() {
//     console.log("Another user in setTimeout");
//   }
// }

// with the bind()
// let user = {
//   firstName: "Ella",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}`);
//   }
// }
// let userSayHi = user.sayHi.bind(user);
// userSayHi();
// setTimeout(userSayHi, 1000);

// // it prints out "Hello Ella" because it uses what was stored in the user initially
// user = {
//   sayHi() {
//     console.log("Another user in setTimeout");
//   }
// }


// Here we can see that arguments are passed as they are and only "this" is fixed by bind
let user = {
  firstName: "John",
  say(phrase) {
    console.log(`${phrase}, ${this.firstName}`);
  }
}
let say = user.say.bind(user);
say("Hello");
say("Bye!")

// To bind just functions now to an object without it being a method we do same thing
let anotherUser = {
  lastName: "Lisa"
}

function func() {
  console.log(this.lastName);
}
let anotherFunc = func.bind(anotherUser);
anotherFunc();


// Partial functions. we can bind arguments not only "this". It is rarely done
function mul(a, b) {
  return a * b;
}
// bind 2 as a parameter fixed so whenever we add a number as our parameter it automatically multiplies with 2 which reads as our first parameter. Note we used null because we arent using "this" and bind requests it.
let multiply = mul.bind(null, 2)
console.log(multiply(3));
console.log(multiply(4));

// Another example of binding a parameter

function divide(a, b) {
 return a / b; 
}
let division = divide.bind(null, 6);
console.log(division(3));
console.log(division(2));