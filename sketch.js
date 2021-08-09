
function preload(){
seaImg=loadImg("sea.png");
shipImage1= loadAnimation(ship-1)
shipImage2= loadAnimation(ship-2)
shipImage3= loadAnimation(ship-3)
shipImage4= loadAnimation(ship-4)
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
if(sea.x < 0){
sea.x=sea.width/2
}
}
sea.velocityX=2;
