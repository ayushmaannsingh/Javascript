// IIFE (Immediately Invoked Function Expression)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();

    // Unnamed IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`Ayush`)