const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box1a, box1b, box1c, box1d, box1e, box1f;
var box2, box3,box4,box5,box6,box7,box8, box9, box10;
var box11, box12, box13, box14, box15;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1400, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,590,300);

  ////////////////////////////////
  box1 = new Box(600, 560, 70, 70);
  box1body
  box1a = new Box(600,530,70,70);
  box1b = new Box(600,500,70,70);
  box1c = new Box(600,470,70,70);
  box1d = new Box(600,440,70,70);
  box1e = new Box(600,410,70,70);
  box1f = new Box(600,370,70,70);
  /////////////////////////////////
  box2 = new Box(900, 560, 70, 70);
  box3 = new Box(900, 530, 70, 70);
  box4 = new Box(900, 500, 70, 70);
  box5 = new Box(900,470,70,70);
  box6 = new Box(900,440,70,70);
  box7 = new Box(900,410,70,70);
  box8 = new Box (900,370,70,70);
  ///////////////////////////////////////
box9 = new Box(750,560,70,70);
  box10 = new Box(750,530,70,70);
  box11 = new Box(750,500,70,70);
  box12 = new Box(750,470,70,70);
  box13 = new Box(750,440,70,70);
  box14 = new Box(750,410,70,70);
  box15 = new Box(750,370,70,70);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box1a.display();
  box1b.display();
  box1c.display();
  box1d.display();
  box1e.display();
  box1f.display();
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

  hero.display();
  rope.display();
  monster.display();

}

 function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function keyPressed(){
  if(keyCode === 32)
    Matter.Body.setPosition(hero.body,{x:400,y:800});
    
}