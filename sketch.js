var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = []
var divisionHeight=300;
var score =0;
var keyspressed = 0
var gameState = "start"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    particle = new Particle (mouseX, 10, 10)
particle = null;
    
}
 


function draw() {
  background("black");
  textSize(20)
  fill ("blue")

 text("Score : "+score,20,30);
 text("500", 25, 650)
 text("400", 105, 650)
 text("300", 185, 650)
 text("200", 265, 650)
 text("100", 345, 650)
 text("100", 425, 650)
 text("200", 505, 650)
 text("300", 585, 650)
 text("400", 665, 650)
 text("500", 745, 650)


  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();


   }

   if(particle != null)
   {
    particle.display ()
    console.log(particle.body.position.x)
    if(particle.body.position.y > 760)
    {
    if(particle.body.position.x < 81
      && particle.body.position.x> 1)
    {
    score = score + 500
    particle = null
    keyspressed = keyspressed + 1

    } else 
    if(particle.body.position.x > 80
      && particle.body.position.x< 160)
    {
    score = score + 400
    particle = null
    keyspressed = keyspressed + 1

    } else
    if(particle.body.position.x > 159 && particle.body.position.x < 240)
    {
    score = score + 300
    particle = null
    keyspressed = keyspressed + 1

    }
 else 
 if(particle.body.position.x > 239 && particle.body.position.x < 320)
 {
  score = score + 200
  particle = null
  keyspressed = keyspressed + 1

 }
else 
if(particle.body.position.x > 319 && particle.body.position.x < 400)
 {
  score = score + 100
  particle = null
  keyspressed = keyspressed + 1

 }
 else 
 if(particle.body.position.x > 399 && particle.body.position.x < 480)
 {
  score = score + 100
  particle = null
  keyspressed = keyspressed + 1

 }
 else 
 if(particle.body.position.x > 479 && particle.body.position.x < 560)
 {
  score = score + 200
  particle = null
  keyspressed = keyspressed + 1

 }else 
 if(particle.body.position.x > 559 && particle.body.position.x < 640)
 {
  score = score + 300
  particle = null
  keyspressed = keyspressed + 1

 }
 else 
 if(particle.body.position.x > 639 && particle.body.position.x < 720)
 {
  score = score + 400
  particle = null
  keyspressed = keyspressed + 1

 }
 else 
 if(particle.body.position.x > 719 && particle.body.position.x < 800)
 {
  score = score + 500
  particle = null
  keyspressed = keyspressed + 1

 } else
 if(particle.body.position.x < 0)

 {
  particle = null
  keyspressed = keyspressed + 1

 }
 else 
 if(particle.body.position.x > 800)

 {
  particle = null
  keyspressed = keyspressed + 1

 }
 

 }

  }
  if (particle === null && keyspressed === 5)
  {
    textSize(50)
  text ("Game Over!", 300, 400)

  }
  
  

   }
   



function mousePressed ()
{
  if(gameState != "end")
  {
if(keyspressed < 5 && particle === null)
{
  particle != null

  particle = new Particle(mouseX, 10,10);

}
  }
}


