
var monkey , monkey_running
var banana ,bananaImage, obstacle1, obstacle1Image
var BananaGroup, obstacle1Group
var score
var grass

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacle1Image = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(650,200);
  
  monkey = createSprite(50,175,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;

  
  grass = createSprite(150,200,850,20);
  grass.velocityX=-5
  
  
  obstacle1Group=new Group();
  BananaGroup=new Group();
  
}


function draw() {
background("white");
  
  spawnBanana();
  
  spawnObstacles();
  
    if (grass.x < 0){
      grass.x = grass.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY=-12;
  }
  
  if (obstacle1Group.isTouching(monkey)){
    grass.velocityX=0
    monkey.velocityY=0
    BananaGroup.setVelocityXEach(0);
    obstacle1Group.setVelocityXEach(0);
    obstacle1Group.setLifetimeEach(-1)
    BananaGroup.setLifetimeEach(-1)
  }
  
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(grass);
  
  drawSprites();
  
}
  function spawnObstacles(){
 if (frameCount % 250=== 0){
   var obstacle1 = createSprite(650,160,10,40);
  obstacle1.addImage(obstacle1Image);
   obstacle1.scale=0.15
   obstacle1.velocityX =-3;
   obstacle1.lifetime=195
       obstacle1Group.add(obstacle1)       
      
    }

    
}

function spawnBanana(){
  if(frameCount % 150===0){
   banana =createSprite(650,10,20,20)
banana.addImage(bananaImage)
    banana.velocityX=-3
    banana.scale=0.05
    banana.y=Math.round(random(40,80))
    banana.lifetime=195
  BananaGroup.add(banana)
  }
}
  




