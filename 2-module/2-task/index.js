function isEmpty(obj) {
  let count = 0;
  for(let key in obj){
      count++;
  }
  if(count != 0) {
      return false;
  }
  return true;
};

let schedule = {};
alert( isEmpty(schedule) ); 

schedule["8:30"] = "подъём";
alert( isEmpty(schedule) ); 
