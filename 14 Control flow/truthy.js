// Truthy values And Falsy value

const username = []

if(username) {
    console.log("Got user email");
}else {
    console.log("Don't have user email");
    
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if(username.length === 0){
    console.log("Array is empty");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??) : null defined

let val1;

val1 = 5 ?? 10
val2  = null ?? 10
val3 = undefined ?? 10
val4 = null ?? 5 ?? 10


console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);




