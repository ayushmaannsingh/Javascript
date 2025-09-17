// Function

function sayMYName(){
    console.log("A");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");
 
}
sayMYName()

function addTwoNumber(number1, number2){
    console.log(number1 + number2);
    
}
//addTwoNumber(5, 4)

function addTwoNumber(number1, number2){
      // let result = number1 + number2
      // return result
      return number1 + number2
  }
//console.log(3, 5);


//const result = addTwoNumber(3,5)
//console.log(("result : ") , result);

function loginUserMessage(username ="Ayush"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}
console.log(loginUserMessage("Ayush"));
