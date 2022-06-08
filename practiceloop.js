 // loop practice
// let i = 4;
// while(i < 7) {
//   console.log(i);
//   i++;
// }

// let i = 100;
// do{
//   console.log(i);
//   i++;
// }while(i < 3);

// for(let i = 2; i < 5; i++){
//   console.log(i);
// }

// let fruits =["apple", "banana", "mango", "grape"]

// function reversedFruits(name) {
//   let newArray = []
//   let i = 0;
//   while(i < name.length){
//     newArray.unshift(name[i]);
//     i++;
//   }
//   return newArray;
// }
// console.log(reversedFruits(fruits));

// function reversedFruits(array){
//   let newArray = [];
//   for(let i = 0; i < array.length; i++){
//     newArray.unshift(array[i]);
//   }
//   return newArray;
// }
// console.log(reversedFruits(fruits));

// let numArray = [1,2,3,4,5,6,7,8,9];

// function evenNum(array){
//   let newArray =[];
//   for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 == 0){
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }
// console.log(evenNum(numArray));

// function oddNum(array){
//   let newArray = [];
//   let i = 0;
//   while(i < array.length){
//     if(array[i] % 2 == 1){
//       newArray.push(array[i]);
//     }
//     i++
//   }
//   return newArray;
// }
// console.log(oddNum(numArray));

// function oddNum(array) {
//   let newArray = [];
//   for(let a of array)
//   if(a % 2 !== 0){
//     newArray.push(a);
//   }
//   return newArray;
// }
// console.log(oddNum(numArray));

const fruits =["banana", "grape", "pear"]
// fruits.length = 0;
// // fruits.splice(0, 3)
// console.log(fruits);

// function emptyArray(array){
//  array.splice(0, array.length);
//  return array;

// }
// console.log(emptyArray(fruits));


function emptyArray(array){
 array.length = 0;
  return array;
 
 }
 console.log(emptyArray(fruits));