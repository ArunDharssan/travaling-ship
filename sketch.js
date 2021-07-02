var ship,ship_moving,edges;
var seaImage;
var sea;
function preload(){
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage=loadAnimation("sea.png");

}

function setup(){
  createCanvas(400,400);
sea=createSprite(200,200);
sea.addAnimation("moving",seaImage);
ship=createSprite(150,200,50,50)
  edges=createEdgeSprites();
ship.addAnimation("moving",ship_moving);
ship.scale=0.2;
sea.scale=0.3;

}

function draw() {
  background("white");
 


 
  sea.velocityX=-2;
  if(sea.x<0){
    sea.x = sea.width=25;
  }

 
    drawSprites();
    
  
  
}




