let a = 2
switch(a){
  case 0:
  console.log(0);
  break;

  case 1:
  console.log(1);
  break;

  case 2:
  case 3:
    console.log("2, 3");
    break;
}

let b = 2 + 2;
switch(b){
  case 3:
    console.log("Too small");
    break;
  case 4:
      console.log("Exactly");
      break;
   case 5:
        console.log("Too big");
        break;
  default:
          console.log("I don't know such values");
}

// if there is no break in the command, it prints out all the results from the first correct command to the end without checking if correct or not

// let c = 2 + 2;
// switch(c){
//   case 3:
//     console.log("Too small");
//     break;
//   case 4:
//       console.log("Exactly");
      
//    case 5:
//         console.log("Too big");
      
//   default:
//           console.log("I don't know such values");
// }


// both switch and case allows arbituary expressions
let d = "1"
let e = 0
switch(+d){
  case e + 1:
    console.log("this runs, because +d is 1, exactly equals e+1");
    break;
default:
  console.log("nothing found");
}

// two cases can be grouped. this is also a side effect of not using the break command

let c = 2 + 2;
switch(c){
  case 3:
    console.log("Too small");
    break;
  case 4:
   case 5:
     console.log("Exactly");
 console.log("Too big");
 break;
      
  default:
          console.log("I don't know such values");
}

// NOTE: switch uses strict equality === it checks both type and value