var trex,trex_running;
var ground,groundImage,invisibleGround
var cloudImage
var
obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var score
var ObstaclesGroup
var CloudsGroup
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage=loadImage("ground2.png")  
cloudImage=loadImage("cloud.png")
obstacle1=loadImage("obstacle1.png")
obstacle2=loadImage("obstacle2.png")
obstacle3=loadImage("obstacle3.png")
obstacle4=loadImage("obstacle4.png")
obstacle5=loadImage("obstacle5.png")
obstacle6=loadImage("obstacle6.png")
}
function setup() {
  createCanvas(600,400);
  trex=createSprite(50,360,10,10);
  trex.addAnimation("running",trex_running)
  trex.scale=0.5
  ground=createSprite(200,370,400,20)
  ground.addImage("ground",groundImage)
  invisibleGround=createSprite(200,380,400,5)
  invisibleGround.visible=false
  ObstaclesGroup=new Group()
  CloudsGroup=new Group()
  score=0
}



function draw() {
  background(180);
  drawSprites();
trex.collide(invisibleGround)
//console.log(trex.y)

if(keyDown("space")&&trex.y>=354){
trex.velocityY=-12
   }
  trex.velocityY=trex.velocityY+0.5
  ground.velocityX=-6
  if(ground.x<0){
  ground.x=ground.width/2
     }
  if(frameCount%80===0){
     spawnClouds()
     }
  if(frameCount%100===0){
    spawnObstacles() 
}
 // console.log(frameRate)
score=score+Math.round(getFrameRate()/20)
text("score:"+score,500,20)
  
}

function spawnClouds(){
var cloud=createSprite(600,200,10,10)
cloud.addImage("cloudImage",cloudImage)
cloud.velocityX=-3
cloud.y=random(200,300)
cloud.lifetime=210  
cloud.scale=0.8
CloudsGroup.add(cloud)
}
function spawnObstacles(){
var obstacle=createSprite(600,370,10,10)
obstacle.velocityX=-6
var rand=Math.round(random(1,6))
switch(rand){
  case 1:obstacle.addImage(obstacle1)
    break;
    case 2:obstacle.addImage(obstacle2)
    break;
    case 3:obstacle.addImage(obstacle3)
    break;
    case 4:obstacle.addImage(obstacle4)
    break;
    case 5:obstacle.addImage(obstacle5)
    break;
    case 6:obstacle.addImage(obstacle6)
    break;
}
  obstacle.scale=0.6
  obstacle.lifetime=110
  ObstaclesGroup.add(obstacle)
}