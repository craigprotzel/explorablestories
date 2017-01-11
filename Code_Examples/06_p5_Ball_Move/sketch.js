function setup() {

	var myCanvas = createCanvas(600,400);
	myCanvas.parent("canvas-container");
 
	background(220,40,50);
	ellipse(300,200,80,80);
}

var posX = 0;
var speed = 5;

function draw() {
	// console.log(n);
	// n = n + 1;

	background(220,40,50);

	ellipse(posX,height/2, 60,60);
	posX = posX + speed;
}


function mousePressed(){
	console.log("Mouse was pressed");
}
