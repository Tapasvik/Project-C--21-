const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball1 
var upArrow
var rightArrow 


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball1Options = {
    restitution : 1
  }

  ball1 = Bodies.circle(100,200, 15, ball1Options)
  World.add(world,ball1)
  console.log(ball1)

  upArrow = createImg("up.png")
  upArrow.position(220,30)
  upArrow.size(50,50)
  upArrow.mouseClicked(vForce)

  rightArrow = createImg("right.png")
  rightArrow.position(20,30)
  rightArrow.size(50,50)
  rightArrow.mouseClicked(hForce)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);


}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse (ball1.position.x, ball1.position.y, 15 )
}

function hForce(){
   Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.005, y:0} )
  }

function vForce(){
    Matter.Body.applyForce(ball1,{x:0,y:0},{x:0, y:-0.005} )
   }
 
 

