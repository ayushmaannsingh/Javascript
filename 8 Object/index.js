// Object

// singleton
// object.create

// object literals

const mySym = Symbol("Key1")

const jsUser ={
    name : "Ayush",
    "full name": "Ayush Singh",
    [mySym] : "myKey1",
    age : 20,
    location :"Bhopal",
    email : "ayush@gamil.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday", "Saturday"]
}

//console.log(jsUser.name);
//console.log(jsUser["full name"]);
//console.log(jsUser[mySym]);
//console.log(jsUser.age);
//console.log(jsUser.location);
//console.log(jsUser.email);
//console.log(jsUser.isLoggedIn);
//console.log(jsUser.LastLoginDays);

jsUser.email = "ayushsingh@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "ayushman@gmail.com"
//console.log(jsUser);


jsUser.greeting = function() {
    console.log("hello js user");
    
}
jsUser.greetingTwo = function() {
    console.log(`Hello js User , ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());








