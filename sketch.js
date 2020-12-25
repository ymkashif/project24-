
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = matter.Render;
var dustbinobj,paperObject,groundObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(center);

	engine = Engine.create();
	world = engine.World;
	dustbinobj = new dustbinObj(1200,650);
	paperObject = new paperObject(200,450,40);
	groundObject = new groundObject(width/2,670,width,20);
	//create a Ground

	var render = render.create({
		element: document.body,
		engine:engine,
		options:{
			width: 1200,
			height: 700,
			wireFrames: false
		}
	});

	Engine.run(engine);
	//render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



