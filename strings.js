let firstName = 'Ella ';
console.log(firstName.length)

let upperFirstName = firstName.toUpperCase()
console.log(upperFirstName)

// let lowerFirstName = firstName.toLowerCase()
// console.log(lowerFirstName)

let lowerFirstName = upperFirstName.toLowerCase()
console.log(lowerFirstName)

function hello(name){
  let greet = name.toUpperCase()
  return greet;
}
let greet = hello('Ella');
console.log(greet);

function sum(a, b){
  return a + b;
}
let result = sum(1,2);
console.log(`1 + 2 = ${result}`);

console.log('I said "don\'t" do it')

console.log('Hey there'.indexOf('H'));

console.log("Widget with id".includes("Widget"));

console.log("Widget with id".includes("law"));


// for slice we use two parameters... the first parameter is telling us where to start from and the second is telling us where to stop but the second parameter wont be included eg(if we use slice(6, 13) the 13th value wont be included it would stop at the 12th value and remember we start counting from 0) also if the numbers are negative it starts counting from the last word of the string and it starts from -1 this time not 0
 let str = 'Apple, Banana, Kiwi';
 let part = str.slice(7, 13);
 console.log(part);

 let str = 'Apple, Banana, Kiwi';
 let part = str.slice(-12, -6);
 console.log(part);

// if the second parameter isnt included, it wipes off everything before the first parameter and prints out the rest of the text.
let str = 'Apple, Banana, Kiwi';
 let part = str.slice(-12);
 console.log(part);
// a shorter method of using the slice method
console.log('Apple, Banana, Kiwi'.slice(-12));


// substring doesnt accept negative values unlike slice that does. It is similar to slice
 let str = 'Apple, Banana, Kiwi';
 let part = str.substring(7, 13);
 console.log(part);


// this is similiar to slice and substring but the second parameter specifies the length of the extracted part...simply telling the computer to print out 7 letters from the 7th word in our case. Note the computer starts counting from 0 in all cases. it accepts negative values as its first parameter and counts backwards just as it does in the slice method and if it is just one parameter added it does the same thing as the slice and substring.
let str = 'Apple, Banana, Kiwi';
let part = str.substr(-4);
console.log(part);

// Replacing string content with replace()
 let text = 'Please visit Microsoft!';
let newText= text.replace('Microsoft', 'Msword')
 console.log(newText);
// note; replace() method only replaces the first match ie the first Microsoft it comes across in the text.
 let text = 'Please visit Microsoft and Microsoft!';
 let newText= text.replace('Microsoft', 'Msword')
 console.log(newText);
// to make it to replace all the matches, use a regular expression with the /g note; a regular expression doesnt have quotation marks
 let text = 'Please visit Microsoft and Microsoft!';
 let newText= text.replace(/Microsoft/g, 'Msword')
 console.log(newText);
//  replace()is case sensitive but if you want to bypass it use regular expression with /i which means it should be case insensitive
let text = 'Please visit Microsoft!';
let newText= text.replace(/MICROSOFT/i, 'Msword')
 console.log(newText);


//  concat() this is used to merge two or more strings
let text1 = 'Hello';
let text2 = 'World!'
let text3 = text1.concat('', text2);
console.log(text3); 

// trim() removes white spaces from both sides of a string
let text4 = '     Hello World!   ';
let text5 = text4.trim();
console.log(text5);


// string padding. we have padStart() and padEnd. The padStart is used to pad a string with another string. the added string is added in front of the original string
let text6 = '5';
let padded = text6.padStart(5, '0');
console.log(padded);
// note padding is a string method, to pad a number first conert it to a string
let numb = 5;
let text7 = numb.toString();
let padStarts = text7.padStart(2, "4");
console.log(padStarts);

// padEnd the added string is added behind the original string
let text8 = '7';
let padEnds = text8.padEnd(3, '0');
console.log(padEnds);
// its a string method so if its being used for a number it has to first be conerted to a string.