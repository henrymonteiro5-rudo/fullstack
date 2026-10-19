let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.arc(350, 120, 55, 0*Math.PI, 2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'gray';
ctx.strokeStyle = 'gray';
ctx.fillRect(0,380,500,150);
ctx.strokeRect(0,380,500,150);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.strokeStyle = 'brown';
ctx.fillRect(170,260,120,120);
ctx.strokeRect(170,260,120,120);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.fillRect(220,330,20,50);
ctx.strokeRect(220,330,20,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'lightblue';
ctx.strokeStyle = 'lightblue';
ctx.fillRect(183,294,35,35);
ctx.strokeRect(183,294,35,35);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'lightblue';
ctx.strokeStyle = 'lightblue';
ctx.fillRect(242,294,35,35);
ctx.strokeRect(242,294,35,35);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.strokeStyle = 'brown';
ctx.fillRect(430,360,20,80);
ctx.strokeRect(430,360,20,80);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.strokeStyle = 'brown';
ctx.fillRect(50,300,20,80);
ctx.strokeRect(50,300,20,80);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(60, 300, 35, 0*Math.PI, 2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(440, 350, 35, 0*Math.PI, 2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

