// Variables == Var, Let, Const these are variable

console.log("Ayush")
console.log(`kya haal hai`)
consloe.log(`I am good. What about you`);

const accountId = 144553
let accountEmail = "ayush@gmail.com"
var accountPassword = "123456"
acountCity = "jaipur"

// acountId = 2  agar aap const keyword likh rhe hai to change nhi kar sakte hai.

/* prefer not to use Var ..
because of issue in block scope and functional scope.

*/
accountEmail = "ayushsingh@gmail.com"
accountPassword = "123456"
accountCity = "Bhopal"
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity , accountState])

