
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies Here
	
    ground = new Ground(800,678,1600,40);

	stone = new Stone();

	tree = new Tree(1200,350,500,500);

	mango1 = new Mango(470,50,20);
	mango2 = new Mango(890,30,40);
	mango3 = new Mango(490,50,50);
	mango4 = new Mango(680,80,30);
	mango5 = new Mango(903,50,10);

	boy = new Boy(200,500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("lightblue");

  stone.display();

  ground.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

//   boy.display();


}



