// Scope Level and mini Hosting in javascript,

function one(){
    const username = "Ayush"

    function two(){
        const website = "youtube"
       // console.log(username);
    }
    //console.log(website);
    
    two()
}
one()

if(true){
    const username = "Ayush"
    if(username === "Ayush"){
        const website = " youtube"
        console.log(username  +  website);
    }
    //console.log(website);
    
}
//console.log(username);

console.log(addOne(5));
function addOne(num){
    return num +1
}

addTwo(6)
const addTwo = function(num){
    return num + 2
}
