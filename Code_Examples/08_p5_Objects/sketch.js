var numObjects = 10;
var objArray = [];
var myImage;
var curText = "";

function preload(){
	myImage = loadImage("london_bus.png");
}

function setup() {

	var myCanvas = createCanvas(800,400);
	myCanvas.parent("canvas-container");

	//Initialize the objects
	for (var i = 0; i < numObjects; i++){
		objArray[i] = new Explorable(i);
	}
}

function draw(){
	background(0,0,255);

	//Update the objects
	for (var i = 0; i < objArray.length; i++){
		objArray[i].update();
	}

	//Update the text
	fill(255);
	textSize(32);
	text(curText, 20,40);
}

function mousePressed(){
	for (var i = 0; i < objArray.length; i++){
		if (objArray[i].hover()){
			objArray[i].doSomething();
		}
	}
}

//Class for the Explorable object
function Explorable(num){

	this.num = num;

	this.x = random(0,width);
	this.y = random(0,height);

	this.w = random(20,80);
	this.h = random(20,80);

	this.r = random(0,255);
	this.g = random(0,255);
	this.b = random(0,255);

	this.update = function(){
		noStroke();
		fill(this.r, this.g, this.b);
		rect(this.x, this.y, this.w, this.h);
		//image(myImage,this.x,this.y,this.w, this.h);
	};

	this.hover = function(){
		if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h){
			return true;
		}
	};

	this.doSomething = function(){
		curText = "I am object number " + this.num;

		this.r = random(0,255);
		this.g = random(0,255);
		this.b = random(0,255);
	};
}