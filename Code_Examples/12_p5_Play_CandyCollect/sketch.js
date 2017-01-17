var maxi;
var maxImage;

var candies;

var timeLimit = 10;
var timer = 0;

function preload(){
	maxImage = loadImage('walle.png');
}

function setup() {
	createCanvas(800,400);
	background(0,0,255);

	maxi = createSprite(width/2, height/2);
	maxi.addImage(maxImage);

	candies = new Group();

	for (var i = 0; i < 5; i++){
		var candy = createSprite( random(0,width), random(0,height),20,20);
		candy.shapeColor = color(235,0,0);
		candies.add(candy);
	}

}

var speed = 5;
var gameOver = false;
var winner = false;

function draw() {
	background(0,0,255);

	if(gameOver){
		fill(255);
		textSize(48);
		textAlign(CENTER);
		text("GAME OVER");
		textSize(24);
		text("click the mouse to restart", width/2,72);
	}
	else if(winner){
		fill(255);
		textSize(48);
		textAlign(CENTER);
		text("YOU WON!!!", width/2, 48);
		textSize(24);
		text("click the mouse to restart", width/2,72);
	}
	else{
		checkForKeyPress();
		maxi.collide(candies, collectCandy);

		drawSprites();

		timer++;
		var curTime = timeLimit - floor(timer/60);
		fill(255);
		textSize(48);
		textAlign(CENTER);
		text(curTime, width/2, 48);

		if (candies.length === 0 ){
			winner = true;
		}

		if (curTime === 0){
			gameOver = true;
		}

	}
}


function collectCandy(player,candyItem){
	console.log("Candy Time!!!");
	candyItem.remove();
}

function mousePressed(){
	if (gameOver || winner){
		restartGame();
	}
}

//Logic for restarting the game
function restartGame(){
	timer = 0;
	gameOver = false;
	winner = false;

	for (var i = 0; i < 5; i++){
		var candy = createSprite( random(0,width), random(0,height),20,20);
		candy.shapeColor = color(235,0,0);
		candies.add(candy);
	}
}

function checkForKeyPress(){
	if ( keyDown('s') && maxi.position.y < (height - 25)  ){
		maxi.position.y = maxi.position.y + speed;
	}
	if ( keyDown('w') && maxi.position.y > 25){
		maxi.position.y = maxi.position.y - speed;
	}
	if ( keyDown('d') && maxi.position.x < width - 10){
		maxi.position.x = maxi.position.x + speed;
	}
	if ( keyDown('a') && maxi.position.x > 10 ){
		maxi.position.x = maxi.position.x - speed;
	}
}



