var bathImg, drinkImg, eatImg, gymImg, issImg, moveImg, sleepImg



function preload() {
  astroImg = loadImage("sleep.png")
  bathImg = loadAnimation("bath1.png", "bath2.png")
  drinkImg = loadAnimation("drink1.png","drink2.png")
  eatImg = loadAnimation("eat1.png","eat2.png")
  gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  issImg = loadImage("iss.png")
  moveImg = loadAnimation("move.png","move1.png")
  
}

function setup() {
  createCanvas(800,400);

  astronaut = createSprite(400,150,40,40)
  astronaut.addImage(astroImg)
  astronaut.scale = 0.15



  









}

function draw() {


  background("white")



  text("Instructions",150,200,40,40)
  text("UpArrow=Excersize",150,230,40,40)
  text("DownArrow=Eating",150,260,40,40)
  text("RightArrow=Bathing",150,290,40,40)
  text("LeftArrow=Drinking",150,320,40,40)

  drawSprites();

  if(keyDown("UP_ARROW")) {
    astronaut.addAnimation("excersize",gymImg )
    astronaut.changeAnimation("excersize")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("eating",eatImg )
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing",bathImg )
    astronaut.changeAnimation("bathing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if(keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("drink",drinkImg )
    astronaut.changeAnimation("drink")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if(keyDown("m")) {
    astronaut.addAnimation("moving",moveImg)
    astronaut.changeAnimation("moving")
    astronaut.velocityX = 1
    astronaut.velocityY = 1
    
  }


}