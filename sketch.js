var f,m;
var g1,g2,g3,g4;

function setup(){
  createCanvas(1200,800)
  f=createSprite (600,400,50,80)
  f.shapeColor='green'
  m=createSprite(800,400,80,30)
  m.shapeColor='green'

g1=createSprite(100,100,50,50)
g2=createSprite(200,100,50,50)
g3=createSprite(300,100,50,50)
g4=createSprite(400,100,50,50)
}
function draw() {
  background(0);
  m.x=World.mouseX
  m.y=World.mouseY

 if (isTouching(m,g1)){
  g1.shapeColor=('cyan')
  g1.shapeColor=('cyan')
}

else{
  f.shapeColor=('lime')
  m.shapeColor=('lime')

}

  drawSprites();
}

function isTouching(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2 && 
    ob2.x - ob1.x < ob2.width/2 + ob1.width/2 &&
     ob1.y - ob2.y < ob2.height/2 + ob1.height/2 && 
    ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
   return true;
    }
    else{
      return false
    }

    }