console.log(3>2 || 1>2);
console.log(3>2 && 1>2);

let isNigerian = false;

function passportControl() {
  if(!isNigerian){
    return 'Present Visa'
  }
  return 'Welcome home'
}
console.log(passportControl());