var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(20,20,20,20)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
  ball.velocityX=5
  }
 drawSprites()
}




