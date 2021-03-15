
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;



var  circle1,ground;	
var world,sling;

function preload(){
circleImg=loadImage("polygon.png")
}

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
 
ground=new Ground(400,400,230,20)
ground2=new Ground(400,610,2000,20)	
ground3=new Ground(800,300,230,20)
box1=new Box(310,370,30,40)
box2=new Box(340,370,30,40)
box3=new Box(370,370,30,40)
box4=new Box(400,370,30,40)
box5=new Box(430,370,30,40)
box6=new Box(460,370,30,40)
box7=new Box(490,370,30,40)
box8=new Box(340,330,30,40)
box9=new Box(370,330,30,40)
box10=new Box(400,330,30,40)
box11=new Box(430,330,30,40)
box12=new Box(460,330,30,40)
box13=new Box(370,290,30,40)
box14=new Box(400,290,30,40)
box15=new Box(430,290,30,40)
box16=new Box(400,250,30,40)

box17=new Box(710,270,30,40)
box18=new Box(740,270,30,40)
box19=new Box(770,270,30,40)
box20=new Box(800,270,30,40)
box21=new Box(830,270,30,40)
box22=new Box(860,270,30,40)
box23=new Box(890,270,30,40)
box24=new Box(740,230,30,40)
box25=new Box(770,230,30,40)
box26=new Box(800,230,30,40)
box27=new Box(830,230,30,40)
box28=new Box(860,230,30,40)
box29=new Box(770,190,30,40)
box30=new Box(800,190,30,40)
box31=new Box(830,190,30,40)
box32 =new Box(800,150,30,40)
circle1=new Circle(100,200,20)
sling =new SlingShot (circle1.body,{x:130,y:200})
	

Engine.run(engine);
	
  
}


function draw() {
background("grey");
Engine.update(engine);

  circle1.display();
  
  sling.display();
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
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  ground.display();
  ground2.display();
  ground3.display();
  
  drawSprites();

 
}


   
  function mouseDragged(){
	Matter.Body.setPosition(circle1.body,{x:mouseX,y:mouseY})
	
	
	}
 	function mouseReleased (){
	sling.fly();
	strokeWeight(4);
  }

  function keyPressed(){
    if(keyCode===32){
      sling.attach(this.circle1);
    }
  }
