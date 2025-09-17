// if 

//const isUserLoggedIn = true
const temperature = 41

if(temperature === 40){
    console.log("less than 50");
}else{
    console.log("temperature is  greater than 50");
    
}
//console.log("execute");

const score = 200
//let power = "fly1"
if (score > 100) {
    let power = "fly"
    console.log(`user power : ${power}`);
    
}
//console.log(`user power : ${power}`);

const balance = 1500

//if(balance > 500) console.log("test"), console.log("test2");

if(balance < 500){
    console.log("less than 500");
    
}else if(balance < 700){
    console.log("less than 700");
    
}else if (balance < 900){
    console.log("less than 900");
    
}else{
    console.log("less than 1200");
    
}

const UserLoggedIn = true
const debitCard = true   // false
const loggedInFromEmail = true
const loggedInFromGoogle = true

if(UserLoggedIn && debitCard){
    console.log("Alow to buy my course");
}else{
    console.log("don't allow");
    
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged into fb");
}else{
    console.log("user don't logged onto fb");
    
}


