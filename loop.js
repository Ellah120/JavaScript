// let i = 0;
// while(i <= 4) {
//   console.log(i);
//   i++;
// }
//  console.log(i);

// let i = 1000;
// do {
//   console.log(i);
//   i++;
// }
// while(i < 3);

// for(let i = 0; i < 3; i++) {
//   console.log(i);
// }

// let fruits = ["apple", "banana", "cherry", "dates", "grapes", "pineapple"]

// function reverseElements(array){
//   let newArray = [];
//   for(let i = 0; i < array.length; i++){
//     // this prints out the array but now in reverse by making the last element the first using unshift array method
//     newArray.unshift(array[i]);
//   }
//   return newArray
// }
// console.log(reverseElements(fruits));

 let numArray = [1,2,3,4,5,6,7,8,9];

// function evenNum(array){
//   let newArray = [];
//   for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 == 0){
//       newArray.push(array[i])
//     }
//   }
//   return newArray
// }

// let result = evenNum(numArray)
// console.log(result);


// for of loop
function oddNum(array){
  let newArray = []
  for(let a of array){
    if(a % 2 ==1){
      newArray.push(a);
    }
  }
  return newArray
}
let result = oddNum(numArray);
console.log(result);