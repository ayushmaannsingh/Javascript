// mouseover , mouseout, mousemove

let ayush = document.querySelector("#ayush");

// ayush.addEventListener("mouseover", function(){
//     ayush.style.backgroundColor = "yellow";
// })

// ayush.addEventListener("mouseout", function(){
//     ayush.style.backgroundColor = "red";
// })

window.addEventListener("mousemove", function(dets){
    ayush.style.top = dets.clientY + "px";
    ayush.style.left = dets.clientX +"px";
});