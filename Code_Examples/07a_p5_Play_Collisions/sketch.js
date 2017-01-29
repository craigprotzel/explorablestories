var thePlayer;
var theBlocks;

function setup(){
	createCanvas(800,600);
	background(150);

	//The Player Object
	thePlayer = createSprite(width/2, height/2, 60,60);
	//var theJellyFish = loadImage('jellyfish.png');
	//thePlayer.addImage(theJellyFish);

	thePlayer.shapeColor = color(225,60,60);

	//The Blocks Object
	theBlocks = new Group();
	for(var i = 0; i < 4; i++){
		var block = createSprite(width/5 + (i * width/5), height/2, 40, height/2 );
		block.shapeColor = color(60,60,225);
		theBlocks.add(block);
	}
}

function draw(){
	background(150);

	checkForKeyPress();
	checkTheEdges();

	//Hit the block and stop
	thePlayer.collide(theBlocks);

	//Hit the block and make it disappear
	//thePlayer.collide(theBlocks, removeBlock);

	drawSprites();
}

function removeBlock(mainObj, hitObj){
	hitObj.remove();
}

function checkForKeyPress(){
	if( keyDown('d') ){
		thePlayer.position.x = thePlayer.position.x + 5;
	}
	if( keyDown('a') ){
		thePlayer.position.x = thePlayer.position.x - 5;
	}

	if( keyDown('s') ){
		thePlayer.position.y = thePlayer.position.y + 5;
	}
	if( keyDown('w') ){
		thePlayer.position.y = thePlayer.position.y - 5;
	}
}

function checkTheEdges(){
	if (thePlayer.position.x < 30){
		thePlayer.position.x = 30;
	}
	if (thePlayer.position.y < 30){
		thePlayer.position.y = 30;
	}
	if (thePlayer.position.y > height - 30){
		thePlayer.position.y = height - 30;
	}
	if(thePlayer.position.x > width + 30){
		console.log("Winner!!!!!");
	}
}

function mousePressed(){

}