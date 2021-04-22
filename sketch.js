
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage=loadImage("Image/boy.png");
	treeImage=loadImage("Image/tree.png");

}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	boy=createSprite(200,620,10,10)
	boy.addImage(boyImage)
	boy.scale=0.1

	tree=createSprite(780,390,10,10)
	tree.addImage(treeImage)
	tree.scale=0.5

	ground = new Ground(600,690,1200,20)

	stone = new Stone(100,600,20)

	mango1 = new Mango(800,300,20)
	mango2 = new Mango(735,150,20)
	mango3 = new Mango(650,300,20)
	mango4 = new Mango(690,200,20)

	slingshot = new SlingShot(stone.body,{x:160, y:570});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();
  
  ground.display();

	stone.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	
	detectcollision(stone,mango1);
	detectcollision(stone,mango2);
	detectcollision(stone,mango3);
	detectcollision(stone,mango4);

	slingshot.display();
}

function mouseDragged(){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
}

function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}

}
