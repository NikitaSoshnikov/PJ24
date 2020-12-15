
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(900,680,1800,20)

paper = new Paper(100,100,30,10)

b = new Dustbin(1600,650,200,20)

l = new Dustbin(1500,600,20,100)

r = new Dustbin(1700,600,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  b.display();
  l.display();
  r.display();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW)

	Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})
}
