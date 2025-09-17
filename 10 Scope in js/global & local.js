// Global And Local scope in js,

//let a = 10
var b = 20
//const c = 30

//console.log(a);
//console.log(b);
//console.log(c);

//let a = 400
if(true){
    let a = 10
    const b =20
    console.log("INNER : " , a);
    console.log(b);
    
     
}
console.log(a);

if(true){
    let a = 10
    const b = 20
    var c = 30
}
//console.log(a);
//console.log(b);
console.log(c);






