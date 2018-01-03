//This is automatically called once
function setup() {
	createCanvas(600,400);
	background(220,40,50);
	ellipse(300,200,80,80);
}

//This is automatically called over and over
function draw() {
	background(220,40,50);
	ellipse(mouseX,mouseY, 60,60);
}