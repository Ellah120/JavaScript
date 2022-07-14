function date(userDate){
  const d = new Date(userDate);
  let month = d.getMonth();
  let monthNames =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let monthName = monthNames[month];
  

  let daysInMonth = getDays(d.getFullYear(), month + 1);
  

   let daysLeft = daysInMonth - d.getDate();
  
  return (`The month is ${monthName}, it has ${daysInMonth} days and we have ${daysLeft} days left to the end of the month`);
}

function getDays(year, month){
   return new Date(year, month, 0).getDate();
}
console.log(date('07/05/2022'));
