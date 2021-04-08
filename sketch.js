PLAY=1
END=0
gameState=PLAY

function preload(){
run_img=loadImage("roadrunner.jpg")
bg=loadImage("bg.jpg")
foodstealer=loadImage("happycockroaches.jpg")
ob1=loadImage("obstacle1.jpg")
ob2=loadImage("obstacle2.png")
ob3=loadImage("obstacle3.jpg")
gd=loadImage("download.jpg")
sad_img=loadImage("sadoggy.jpg")
theif=loadImage("happycockroaches.jpg")
}
function setup() {
  createCanvas(900,600);
 
  oogy=createSprite(100,300,20,50)
  oogy.addImage("oggy",run_img)
  oogy.addImage("oggysad",sad_img)
  oogy.scale=0.4;

 cocks=createSprite(300,300,20,50)
 cocks.addImage(theif);
 cocks.scale=0.8;


ground=createSprite(300,380,1000,20)
ground.x=ground.width/2

invisibleground=createSprite(600,380,1300,20)
invisibleground.visible=false;


  ObstacleGroup=new Group()
}

function draw() {
  background(bg);  

if(ground.x<0){
  ground.x=ground.width/2

}
spawnObstacles();
if(keyDown("space")&&oogy.y>=100){
  oogy.velocityY=-12

}
oogy.velocityY=oogy.velocityY+0.8;

if(gameState===PLAY){
oogy.velocityX=0;
ground.velocityX=-4;
oogy.changeImage("oggy",run_img)
ObstacleGroup.velocityX=-4
cocks.visible=false;
}else if(gameState===END){
  oogy.velocityX=0;
ground.velocityX=0;
obstacles.visible=false;
obstacles.velocityX=0;

oogy.changeImage("oggysad",sad_img)
cocks.visible=true;
textSize(26)
fill("black")
text("gameover.fail to catch the cockroaches",200,50)

}

if(ObstacleGroup.isTouching(oogy)){
  gameState=END;
}

oogy.collide(invisibleground)

ObstacleGroup.setLifetimeEach(-1)

  drawSprites();



}
function spawnObstacles(){
  if(frameCount%80===0){
obstacles=createSprite(500,350,50,50)
obstacles.velocityX=-4;

var rand=Math.round(random(1,4))

  
obstacles.addImage(ob3)



obstacles.scale=0.2;
obstacles.lifetime=200;
ObstacleGroup.add(obstacles)


}
}



