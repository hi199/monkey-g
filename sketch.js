
var monkey , monkey_running
var banana ,bananaImg, obstacle, obstacleImg
var bannaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImg = loadImage("obstacle.png");
 
}



function setup() {
    
  monkey = createSprite(180,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  score=0;
  ground = createSprite(400,350,900,10);
  ground.x = 10
  console.log(ground.x)
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
}


function draw() {
 monkey.collide(ground);
  if (ground.x < 0){
  ground.x = ground.width/2;
}
 if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -12;
 }
  monkey.velocityY = monkey.velocityY + 0.8

drawSprites(); 
}
function spawnobstacles(){
 

if (frameCount % 300 === 0){
   var obstacle = createSprite(400,165,10,40); 
    obstacles.scale = 0.5;
    obstacles.lifetime = -1
    obstaclesGroup.add(obstacles);
}
}
 if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);    
    banana.scale = 0.2;
    banana.velocityX = -3;
   banana.lifetime = -1;
   bananaGroup.add(banana);
 }
var survivalTime=0;
stroke("white");
textSize(20);
fill("white")
text("Score: "+ score ,500,50)
stroke("black");
textSize(20);
fill("black")
survivalTime=Math.ceil(frameCount/frameRate())
text("survivalTime"+survivalTime ,100,50)