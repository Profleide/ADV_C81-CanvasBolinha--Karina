// Canvas refecence:
// https://www.w3schools.com/graphics/canvas_reference.asp
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var cor = "red";

// circulo(200, 200);

canvas.addEventListener("mousedown",clique);

function clique (e) {
    cor = document.getElementById("cor").value;
    console.log(cor);
    // console.log(e);
    var telaX = e.offsetX;
    var telaY = e.offsetY;
    console.log("X = " + telaX + " | Y = " + telaY);
    circulo (telaX, telaY);
}

function circulo (x, y) {
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = 2;
    // arc(x,y,r,startangle,endangle) - angulos em radianos - 360° = 2PI
    ctx.arc(x, y, 40, 0, 2*Math.PI);
    ctx.stroke();
}
