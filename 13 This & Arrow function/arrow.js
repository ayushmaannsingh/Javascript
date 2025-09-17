// Arrow function 

function chai(){
    let username = "Ayush"
    console.log(this.username);
    
}
//chai()

const orcode = () => {
    let username = "Ayush"
    console.log(this);
    
}
//orcode()

//const addTwo = (num1, num2) => {
    //return num1 + num2
//}

//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2) 

const addTwo = (num1, num2) => ({username : "Ayush"})
console.log(addTwo(10, 10));
