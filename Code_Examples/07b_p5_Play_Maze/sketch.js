var thePlayer;
var theSpeed = 4;

var theWalls;

var timer = 0;
var timeLimit = 10;

var gameIsOver = false;
var gameWon = false;

function setup(){
	createCanvas(800,600);
	background(150);

	startNewGame();
}

function startNewGame(){

	gameIsOver = false;
	gameWon = false;
	timer = 0;

	thePlayer = createSprite(20, height/2, 40,40);
	thePlayer.shapeColor = color(50,20,220);
	// var playerImg = loadImage("ufo-spaceship.png");
	// thePlayer.addImage(playerImg);

	theWalls = new Group();
	for (var i = 0; i < 5; i++){
		var skipNum = floor(random(0,5));
		console.log(skipNum);
		for (var j = 0; j < 6; j++){
			if (j !== skipNum){
				var wall = createSprite(width/6 + (width/6 * i),(height/5 * j),40,height/5);
				wall.shapeColor = color(220,20,50);
				theWalls.add(wall);
			}
		}
	}
}

function draw(){

	background(150);
	if (gameIsOver){
		textSize(32);
		textAlign(CENTER);
		if (gameWon){
			text("WINNER!!!", width/2, height/2);
		}
		else{
			text("GAME OVER. YOU LOSE.", width/2, height/2);
		}
		textSize(24);
			text("Click the mouse to play again.", width/2, height/2 + 40);
	}
	else{
		checkKeyPresses();
		checkEdges();
		thePlayer.collide(theWalls);
		drawSprites();

		//Logic for the timer
		timer++;
		var curTime = timeLimit - floor(timer/60);
		textSize(32);
		textAlign(CENTER);
		text(curTime,width/2, 32);

		if (curTime === 0){
			gameIsOver = true;
		}
	}
}

function checkKeyPresses(){
	//Set up down movement
	if (keyDown('s')){
		thePlayer.position.y += theSpeed;
	}
	if (keyDown('w')){
		thePlayer.position.y -= theSpeed;
	}

	//Set right left movement
	if (keyDown('d')){
		thePlayer.position.x += theSpeed;
	}
	if (keyDown('a')){
		thePlayer.position.x -= theSpeed;
	}
}

function checkEdges(){
	if (thePlayer.position.x < thePlayer.width/2){
		thePlayer.position.x = thePlayer.width/2;
	}
	if (thePlayer.position.y < thePlayer.height/2){
		thePlayer.position.y = thePlayer.height/2;
	}
	if (thePlayer.position.y > height - thePlayer.height/2){
		thePlayer.position.y = height - thePlayer.height/2;
	}
	//Win condition!
	if (thePlayer.position.x > width + thePlayer.width/2){
		gameIsOver = true;
		gameWon = true;
		console.log("WooHoo!!!!");
	}
}

function mousePressed(){
	if (gameIsOver){
		thePlayer.remove();
		theWalls.removeSprites();
		startNewGame();
	}
}