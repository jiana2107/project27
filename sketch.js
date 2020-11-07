
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var r1,r2,r3,r4,r5;
var roof1;

var world,engine;

function preload()
{
	
}

function setup() {

  createCanvas(800, 700); 
  
  engine = Engine.create();
	world = engine.world;
  
  roof1=new Roof(400,100,500,20);

  bob1=new Bob(200,600,50);
  bob2=new Bob(300,600,50);
  bob3=new Bob(400,600,50);
  bob4=new Bob(500,600,50);
  bob5=new Bob(600,600,50);
  
  //r1.depth=bob1.depth;
  //bob1.depth=bob1.depth+1;

  r1=new Rope(bob1.body,roof1.body,190,100)
  r2=new Rope(bob2.body,roof1.body,290,100)
  r3=new Rope(bob3.body,roof1.body,390,100)
  r4=new Rope(bob4.body,roof1.body,490,100)
  r5=new Rope(bob5.body,roof1.body,590,100)


	//Create the Bodies Here.

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  roof1.display();

  r1.display()
  r2.display()
  r3.display()
  r4.display()
  r5.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  drawSprites();
 
}
 function keyPressed() {
   if(keyCode===UP_ARROW){
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-350,y:350})
     bob1.fly();
   }
   
   
 }



