const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stick1, stick2, stick3, stick4, stick5, stick6;
var ground, ground2;
var box1;
var rope1;

function setup() {
  createCanvas(4000,500);
  engine = Engine.create();
  world = engine.world;
  
  stick1 = new Stick(1500,250,50,100);
  stick2 = new Stick(1550,250,50,100);
  stick3 = new Stick(1600,250,50,100);
  stick4 = new Stick(1650,250,50,100);
  stick5 = new Stick(1700,250,50,100);
  
  stick6 = new Stick(500,300,100,100);

  ground = new Ground(10,500,4000,10);
  ground2 = new Ground(1600,400,400,10)

  box1 = new Box(500,250);

  rope1 = new rope(box1.body,{x:500, y:250});

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
 
  ground.display();
  ground2.display();

  box1.display();
  rope1.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(box1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  rope1.fly();
}

function keyPressed(){
  if (keyCode === 32){
    rope1.attach(box1.body)
  }

}