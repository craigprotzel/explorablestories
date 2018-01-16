var bgImage;
var soup;
var dumpling;

var theSound;

function preload(){
  bgImage = loadImage('shanghai.jpg');
  soup = loadImage('soup.png');
  dumpling = loadImage('dumpling.png');
}

var theSoup;
var theDumplings;
var total = 100;

var timeLimit = 10;
var timer = 0;

function initGame(){

  theDumplings = new Group();
  for (var i = 0; i < total; i++){
    var oneDumpling = createSprite(random(0,width), random(0,height));
    oneDumpling.addImage(dumpling);
    theDumplings.add(oneDumpling);
  }

  theSoup = createSprite(width/2, height/2);
  theSoup.addImage(soup);

}

function setup() {
  // put setup code here
  createCanvas(800,600);
  background(150,150,235);

  soup.resize(100,60);
  dumpling.resize(50,50);
  initGame();
}

function makeDisappear(collider, target){
  console.log("Collision!!!");
  console.log(collider);
  console.log(target);

  target.remove();

}

var winner = false;
var gameOver = false;

function draw() {
  // put drawing code here
  background(150,150,235); 
  
  if (gameOver){
    fill(255);
    textAlign(CENTER);
    textSize(46);
    text("SORRY!!!", width/2, 80); 

    textSize(24);
    text("Click mouse to restart", width/2, 160);
  }
  else if (winner){
    fill(255);
    textAlign(CENTER);
    textSize(46);
    text("WINNER!!!", width/2, 80);

    textSize(24);
    text("Click mouse to restart", width/2, 160);
  }
  else{
    theSoup.position.x = mouseX;
    theSoup.position.y = mouseY;
    noCursor();

    theSoup.overlap(theDumplings, makeDisappear);
    drawSprites();

    timer++;
    var curTime = timeLimit - floor(timer/60);
    fill(255);
    textAlign(CENTER);
    textSize(46);
    text(curTime, width/2, height - 60);

    if (theDumplings.length === 0){
      winner = true;
    }
    if (curTime === 0){
      gameOver = true;
    }
  }
}


function mousePressed(){

  if (winner || gameOver){
    winner = false;
    gameOver = false;
    timer = 0;

    theDumplings.removeSprites();
    theSoup.remove();

    total = total * 1.5;
    timeLimit = timeLimit - 1;
    initGame();
  }

}

function keyPressed(){
}

