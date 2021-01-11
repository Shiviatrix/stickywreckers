const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var grounddood,balldood,ropedood,balldood2,ropedood2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;

function setup() {
  createCanvas(800,600);

   engine = Engine.create();
   world = engine.world;

   grounddood = new Base(400,600,800,30);

   box1 = new Building(400,100,60,60);
   box2 = new Building(400,100,60,60);
   box3 = new Building(400,100,60,60);
   box4 = new Building(400,100,60,60);
   box5 = new Building(400,100,60,60);
   box6 = new Building(400,100,60,60);
   box7 = new Building(400,100,60,60);
   box8 = new Building(400,100,60,60);
   box9 = new Building(400,100,60,60);
   box10 = new Building(500,100,60,60);
   box11 = new Building(500,100,60,60);
   box12 = new Building(500,100,60,60);
   box13 = new Building(500,100,60,60);
   box14 = new Building(500,100,60,60);
   box15 = new Building(500,100,60,60);
   box16 = new Building(500,100,60,60);
   box17 = new Building(500,100,60,60);
   box18 = new Building(600,100,60,60);
   box19 = new Building(600,100,60,60);
   box20 = new Building(600,100,60,60);
   box21 = new Building(600,100,60,60);
   box22 = new Building(600,100,60,60);
   box23 = new Building(600,100,60,60);
   box24 = new Building(600,100,60,60);
   box25 = new Building(600,100,60,60);


   balldood = new Ball(100,240,80,80);
   balldood2 = new Ball(900,240,80,80);
   ropedood = new Rope(balldood.body,{x:250,y:100});
   ropedood2 = new Rope(balldood2.body,{x:750,y:100});

}

function draw() {
  background(210,255,25);
  Engine.update(engine);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();

balldood.display();
ropedood.display(); 
grounddood.display();
balldood2.display();
ropedood2.display();
}