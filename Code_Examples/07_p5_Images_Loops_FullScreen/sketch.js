var w = 600;
var h = 300;

//Need to run a local host for the image to load
var rocketShip;

var randomR = 220;
var randomG = 40;
var randomB = 50;

var posX = 0;
var posY = h/2;
var speedX = 5;
var speedY = 5;

function preload(){
	rocketShip = loadImage("rocket.png");
}

function setup() {
	//Set canvas to be the full width and height of the window
	var myCanvas = createCanvas(windowWidth,windowHeight);
	myCanvas.parent("canvas-container");
 
	background(randomR,randomG,randomB);

	imageMode(CENTER);
}

function draw() {

	background(randomR,randomG,randomB);

	var randomX = random(0,width);
	var randomY = random(0,height);

	ellipse(posX, posY, 60, 60);

	//Place multiple rockets on the page
	for (var i = 0; i < 10; i++){
		image(rocketShip, 50+(i*50),height/2,50,100);
	}

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

	//Click on the right side of the screen to change the background color
	if (mouseX > width/2){
		randomR = Math.round(random(0,255));
		randomG = Math.round(random(0,255));
		randomB = Math.round(random(0,255));
	}
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


