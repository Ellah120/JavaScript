let fruits = ["apple", "banana"];
console.log(fruits);
fruits.push("grape");
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
fruits[0] = "papaya";
console.log(fruits);


// const person = {
//   name: "Shalom" ,
//   age: 98
// }
// console.log(person);

// person.name = "Ella";
// console.log(person);


// for pop
// fruits.pop();
// console.log(fruits);
// let poppedFruits = fruits.pop();
// console.log(poppedFruits);

// // for shift
// fruits.shift();
// console.log(fruits);
// fruits.push("orange")
// console.log(fruits)

// // for unshift
// fruits.unshift("mango");
// console.log(fruits);


// for splice; splice can remove, replace and insert an element in array
// to remove an element from any position we simply do the below code; we want to say from index 1, remove one element
// fruits.splice(1, 1);   
// console.log(fruits);

// now we want to remove the first 2 elements and replace them with another element
// fruits.splice(0, 2, "orange", "mango")
// console.log(fruits);

// here we can see that splice returns the removed element. we just have to save them into a variable
let removed = fruits.splice(0, 2);
console.log(removed);

// here we want to add/insert more elements without deleting anyone of the elements already in the array. to do this we simply set our delete count to 0. we added the removed fruits previously back into the array because we saved it into a variable. we simply said from index 0, delete 0 element then replace them with the elements saved in the "removed variable"
fruits.splice(0, 0, removed);
console.log(fruits);

// array methods accept negative values and just like strings it counts backwards. the first element backwards is -1 not 0
// let arr =[1, 2, 5];
// arr.splice(-1, 0, 3, 4);
// console.log(arr);


// For Slice its similar to slice in string. it tells the computer t0 print from the 1st index to the 3rd. note that the 3rd index wont be added.
// let arr =[1, 2, 3, 4, 5];
// let added = arr.slice(1, 3);
// console.log(added);

// slice can also be used without arguments usually to create a copy of the previous array
let arry =[1, 2, 3, 4, 5];
let empty = arry.slice();
console.log(empty);


// For concat it is used to add more elements to an array. if it is another array it adds just the elements and if its just arguments it adds the arguments.
let arr =[1, 2, 3, 4, 5];
// console.log(arr,concat([6, 7]));
// console.log(arr.concat([6, 7], [8, 9]));
console.log(arr.concat([6, 7], 8, 9));

// let arrM = [1, 2];
// let arrayLike = {
//   0: "something",
//   length: 1
// };

// console.log( arrM.concat(arrayLike) ); // 1,2,[object Object]

let arrM = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arrM.concat(arrayLike) ); // 1,2,something,else

// forEach() this allows us run a function for every element of the array
["Ella", "Shalom", "Eneh", "Ben"].forEach(console.log);
// if we want to elaborate more we can write it this way
["Ella", "Shalom", "Eneh", "Ben"].forEach((item, index, array) => {
  console.log(`${item} is at ${index} in ${array}`);
});