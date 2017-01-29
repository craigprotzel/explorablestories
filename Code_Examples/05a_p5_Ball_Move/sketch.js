var w = 600;
var h = 300;

//Need to run a local host for the image to load
var rocketShip;

function setup() {

	var myCanvas = createCanvas(w,h);
	myCanvas.parent("canvas-container");
 
	background(220,40,50);
	ellipse(300,200,80,80);

	rocketShip = loadImage("rocket.png");

}

var posX = 0;
var posY = h/2;
var speedX = 5;
var speedY = 5;

function draw() {
	// console.log(n);
	// n = n + 1;

	background(220,40,50);

	image(rocketShip, posX, posY, 50,100);
	ellipse(posX, posY, 60, 60);

	if (moveTheBall){
		posX = posX + speedX;
		posY = posY + speedY;
	}

	if (posX > width || posX < 0 ){
		speedX = speedX * -1;
	}

	if (posY > height || posY < 0){
		speedY = speedY * -1;
	}

}

var moveTheBall = false;

function mousePressed(){
	console.log("Mouse was pressed");
	moveTheBall = !moveTheBall;
}

function keyPressed(){
	if (keyCode == 87){
		if (speedY > 0){
			speedY = speedY + 1;
		}
		if (speedY < 0){
			speedY = speedY - 1;
		}
	}

	if (keyCode == 83){
		if (speedY > 0){
			speedY = speedY - 1;
		}
		if (speedY < 0){
			speedY = speedY + 1;
		}
	}
	//console.log(speedY);

	//There is a bug. What happens if the speed is 0???
}


