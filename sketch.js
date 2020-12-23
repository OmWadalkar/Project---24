
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin,dustbin2,dustbin3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(100,400,2);
   dustbin = new Dustbin(450,610,20,150);
  ground = new Ground(500,700,1000,10);
  dustbin2 = new Dustbin(535,690,190,20) 
  dustbin3 = new Dustbin(620,610,20,150);

	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  background("pink");
  

 paper.display();
 dustbin.display();
 ground.display();
 dustbin2.display();
 dustbin3.display();
}
function keyPressed()
{
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 85,y: -85});
	}
}


