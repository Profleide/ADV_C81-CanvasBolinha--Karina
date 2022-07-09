// Canvas refecence:
// https://www.w3schools.com/graphics/canvas_reference.asp
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const cor = "red";

ctx.beginPath();
ctx.strokeStyle = cor;
ctx.lineWidth = 2;
// arc(x,y,r,startangle,endangle) - angulos em radianos - 360° = 2PI
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
