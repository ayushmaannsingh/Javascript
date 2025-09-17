// let h1 = document.querySelector("h1");
// h1.addEventListener("click", function(){
//     h1.style.color = "red";
// });

// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     p.style.color = "orange"; 
// });

// let h1 = document.querySelector("h1");
// h1.addEventListener("dblclick", function(){
//     h1.style.color = "red";
// });


// let inp = document.querySelector("input")

// inp.addEventListener("input", function(dets){
//     if(dets.data !== null){
//     console.log(dets.data);
//     }
    
// });

// let sel = document.querySelector("select")
// let device = document.querySelector("#device")

// sel.addEventListener("change", function(dets){
//     device.textContent = `${dets.target.value} Device Selected`;
// });


// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function(dets){
//     if(dets.key === " "){
//         h1.textContent ="SPC";
//     }else{
//         h1.textContent = dets.key;
//     };
// });


let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp")

btn.addEventListener("click", function(){
    fileinp.click();
});

fileinp.addEventListener("change", function(dets){
    const file = dets.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
})