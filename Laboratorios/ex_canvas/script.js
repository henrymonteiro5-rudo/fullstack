let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 2;
ctx.font = "30px Arial"
ctx.textAlign = "center";
ctx.fillText("Desenvolvimento Web", 250, 100);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'white';
ctx.fillRect(0,0,50,50);
ctx.strokeRect(0,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'white';
ctx.fillRect(450,0,50,50);
ctx.strokeRect(450,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'white';
ctx.fillRect(0,450,50,50);
ctx.strokeRect(0,450,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'white';
ctx.fillRect(450,450,50,50);
ctx.strokeRect(450,0,50,50);
ctx.closePath();


// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'lightgreen';
ctx.arc(100, 180, 25 , 0*Math.PI, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'lightgreen';
ctx.arc(380, 180, 25, 0*Math.PI, 2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'lightgreen';
ctx.arc(250, 250, 70, 0*Math.PI, 1*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'lightgreen';
ctx.moveTo(0, 250);
ctx.lineTo(500, 250);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.moveTo(0, 500);
ctx.lineTo(500, 0);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.moveTo(0, 0);
ctx.lineTo(500, 500);
ctx.stroke();
ctx.closePath();

