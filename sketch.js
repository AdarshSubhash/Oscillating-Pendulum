const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rope,pendulum;



function setup() {
createCanvas(500,500);
engine = Engine.create();
 world = engine.world;
 pendulum= new Pendulum(100,100);
 rope = new Rope(pendulum.body,{x:250,y:50});

}

function draw() {
 background(200);  
 Engine.update(engine);
 strokeWeight(4);
 text("Press Space key to Move pendulum as mouse position",134,30);
 pendulum.display();
 rope.display();

 if(keyCode===32){
  Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY});

 }
 
}


 
