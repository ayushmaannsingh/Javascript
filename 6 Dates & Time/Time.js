// Time..

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let myCreateDate = new Date()
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday : "long"
})



