//  uses of this..

const user = {
    username: "Ayush",
    price: 999,

welcomeMessage: function() {
    //console.log(`${this.username}, welcome to website`);
    //console.log(this);   
}
}

user.welcomeMessage()
user.username = "Ayushman"
user.welcomeMessage()

//console.log(this);
