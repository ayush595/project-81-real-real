canvas= document.getElementById("cannu");
ctx= canvas.getContext("2d");
color= "brown";
// to draw any shape
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 4;
// to draw circle we use arc
ctx.arc(200,200,45,0,2*Math.PI);
ctx.stroke();
//  to add a event
canvas.addEventListener("mousedown",hhj);
function hhj(e) {
    color= document.getElementById("textcolor").value;
    mousex= e.clientX-canvas.offsetLeft;
    mousey= e.clientY-canvas.offsetTop;
    console.log("x="+mousex+"y="+mousey);
    circle(mousex,mousey);
}
function circle(mousex,mousey) {
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= 4;
    // to draw circle we use arc
    ctx.arc(mousex,mousey,45,0,2*Math.PI);
    ctx.stroke(); 
}
function cleararea() {
ctx.clearRect(0,0,canvas.width,canvas.height)    
}