var bgImage;
var characterImage;

function preload(){
  bgImage = loadImage('shanghai.jpg');
  characterImage = loadImage('ufo.png');
}

function setup() {
  // put setup code here
  createCanvas(800,600);
  background(bgImage);
}

var currentX = 0;
var speedX = 5;

var currentY = 0;
var speedY = 7;

function draw() {
  // put drawing code here
  background(bgImage);
  
  //fill(240, 220, 10);
  //noStroke();
  //ellipse(400,300, 200,200);

  fill(0,0,255);
  //ellipse(currentX, currentY, 100,100);
  image(characterImage, currentX, currentY, characterImage.width/4, characterImage.height/4);

  if (moving){
    currentX = currentX + speedX;
    currentY = currentY + speedY;
  }

  if (currentX > width || currentX < 0){
    speedX = speedX * -1;
  }
  if (currentY > height || currentY < 0){
    speedY = speedY * -1;
  }
}

var moving = false;
function mousePressed(){
  moving = !moving;
  console.log(moving);
}

function keyPressed(){
  if (keyCode === LEFT_ARROW) {
    speedX = speedX * 0.9 ;

  } else if (keyCode === RIGHT_ARROW) {
    speedX = speedX * 1.1;
  }
}

