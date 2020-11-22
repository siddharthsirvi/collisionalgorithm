var fixed,moving 



function setup() {
  createCanvas(800,400);
  fixed=createSprite(200,200,50,70);
  fixed.shapeColor="green";
fixed.debug=true

moving=createSprite(300,200,50,70);
moving.shapeColor="green";
moving.debug=true
}

function draw() {
  background(255,255,255);
  moving.x=mouseX;
  moving.y=mouseY;
  if(moving.x-fixed.x<moving.width/2+fixed.width/2&&fixed.x-moving.x<moving.width/2+fixed.width/2&&moving.y-fixed.y<moving.height/2+fixed.height/2&&fixed.y-moving.y<fixed.height/2+moving.height/2

){
fixed.shapeColor="red"
moving.shapeColor="red"
  }  
  else{
    fixed.shapeColor="green"
moving.shapeColor="green"
  }
  drawSprites();
}