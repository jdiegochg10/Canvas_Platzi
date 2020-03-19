var d = document.getElementById("dibujo_canvas");
var lienzo = d.getContext("2d");

//P

lienzo.beginPath();
lienzo.strokeStyle = "green";
lienzo.lineWidth = 3;

lienzo.moveTo(20, 10);
lienzo.lineTo(20, 200);

lienzo.moveTo(30, 10);
lienzo.lineTo(30, 200);

lienzo.moveTo(20, 10);
lienzo.lineTo(30, 10);

lienzo.moveTo(20, 200);
lienzo.lineTo(30, 200);

lienzo.moveTo(20, 200);
lienzo.lineTo(30, 200);

lienzo.moveTo(20, 200);
lienzo.lineTo(30, 200);

lienzo.moveTo(30, 10);
lienzo.lineTo(40, 10);
lienzo.arcTo(110, 10, 110, 50 , 50);
lienzo.moveTo(30, 100);
lienzo.lineTo(40, 100);
lienzo.arcTo(110, 100, 110, 50 , 50);

lienzo.moveTo(30, 10);
lienzo.lineTo(40, 10);
lienzo.arcTo(120, 10, 120, 50 , 50);
lienzo.moveTo(30, 100);
lienzo.lineTo(40,100);
lienzo.arcTo(120, 100, 120, 50 , 50);

lienzo.stroke();
lienzo.closePath();

//L

lienzo.beginPath();

lienzo.moveTo(120, 10);
lienzo.lineTo(170, 10);

lienzo.moveTo(140, 10);
lienzo.lineTo(140, 200);

lienzo.moveTo(150, 10);
lienzo.lineTo(150, 200);

lienzo.moveTo(120, 200);
lienzo.lineTo(215, 200);

lienzo.moveTo(215, 200);
lienzo.lineTo(220, 180);

lienzo.stroke();
lienzo.closePath();

//A

lienzo.beginPath();

lienzo.moveTo(280, 10);
lienzo.lineTo(235, 200);

lienzo.moveTo(280, 10);
lienzo.lineTo(235, 200);

lienzo.moveTo(225, 200);
lienzo.lineTo(245, 200);

lienzo.moveTo(280, 10);
lienzo.lineTo(325, 200);

lienzo.moveTo(250, 130);
lienzo.lineTo(310, 130);

lienzo.moveTo(280, 10);
lienzo.lineTo(290, 10);

lienzo.moveTo(290, 10);
lienzo.lineTo(335, 200);

lienzo.moveTo(315, 200);
lienzo.lineTo(345, 200);

lienzo.stroke();
lienzo.closePath();

//T
lienzo.beginPath();

lienzo.moveTo(340, 10);
lienzo.lineTo(450, 10);

lienzo.moveTo(340, 10);
lienzo.lineTo(340, 30);

lienzo.moveTo(450, 10);
lienzo.lineTo(450, 30);

lienzo.moveTo(390, 10);
lienzo.lineTo(390, 200);

lienzo.moveTo(400, 10);
lienzo.lineTo(400, 200);

lienzo.moveTo(380, 200);
lienzo.lineTo(410, 200);

lienzo.stroke();
lienzo.closePath();

//Z

lienzo.beginPath();

lienzo.moveTo(460, 10);
lienzo.lineTo(560, 10);

lienzo.moveTo(460, 200);
lienzo.lineTo(560, 200);

lienzo.moveTo(560, 10);
lienzo.lineTo(470, 200);

lienzo.moveTo(550, 10);
lienzo.lineTo(460, 200);

lienzo.stroke();
lienzo.closePath();

//I

lienzo.beginPath();

lienzo.moveTo(590,10);
lienzo.lineTo(640,10);

lienzo.moveTo(610,10);
lienzo.lineTo(610,200);

lienzo.moveTo(620,10);
lienzo.lineTo(620,200);

lienzo.moveTo(590,200);
lienzo.lineTo(640,200);

lienzo.stroke();
lienzo.closePath();