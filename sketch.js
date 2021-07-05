var bg, sleep, brush, gym, eat, drink, move, astronaut, bath, bg1

function preload(){
bg = loadImage("images/iss.png")
sleep = loadImage("images/sleep.png")
brush = loadImage("images/brush.png")
gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png")
eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png")
bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png")
move = loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  bg1 = createSprite(400,200)
  bg1.addImage(bg)
  astronaut = createSprite(300,230)
  astronaut.addImage("sleeping",sleep)
  astronaut.scale = 0.1
}

function draw() {
  background(255,255,255);  
  drawSprites();
 
  textSize(20)
  fill("white")
  text("instructions",20,35)
  textSize(15)
  text("up arrow = brushing",20,55)
  text("down arrow = excersise",20,70)
  text("left arrow = eating",20,85)
  text("right arrow = bathing",20,100)
  text("m key= move",20,115)
  
  edges = createEdgeSprites()
  astronaut.bounceOff(edges)

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0 
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0 
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0 
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0 
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0 
  }
 

}