var sun,sunimg ;
var mercury , venus , earth, mars,jupiter,saturn,uranus, neptune,mercuryimg,venusimg,
earthimg,marsimg,jupiterimg,saturnimg,uranusimg,neptuneimg;

function preload(){
  sunimg = loadImage("sun.png");
  mercuryimg= loadImage("mercury.png");
  venusimg=loadImage("venus.png");
earthimg=loadImage("earth.png");
marsimg=loadImage("mars.png");
jupiterimg=loadImage("jupiter.png");
saturnimg=loadImage("saturn.png");
uranusimg=loadImage("uranus.png");
neptuneimg=loadImage("neptune.png");
}
function setup() {
  createCanvas(1000,1000);
  sun = createSprite(70,300,80,80);
  sun.addImage(sunimg);
  sun.scale= 0.7;
  sun.setCollider("rectangle",0,0,100,100);

 mercury = createSprite(160,300,35,35);
 mercury.addImage(mercuryimg);
 mercury.scale= 0.05;
 mercury.setCollider("rectangle",0,0,10,10);

 venus= createSprite(244,300,45,45);
 venus.addImage(venusimg);
 venus.scale= 0.08;
 venus.setCollider("rectangle",0,0,10,10);
 venus.depth = sun.depth-1;

 earth = createSprite(350,300,45,45);
 earth.addImage(earthimg);
 earth.scale= 0.1;
 earth.setCollider("rectangle",0,0,10,10);
 earth.depth = sun.depth-1;

 mars = createSprite(450,300,40,40);
 mars.addImage(marsimg);
 mars.scale= 0.07;
 mars.setCollider("rectangle",0,0,10,10);
 mars.depth = sun.depth-1;

 jupiter= createSprite(550,300,65,65);
 jupiter.addImage(jupiterimg);
 jupiter.scale= 0.4;
 jupiter.setCollider("rectangle",0,0,10,10);
 jupiter.depth = sun.depth-1;

 saturn = createSprite(700,300,55,55);
 saturn.addImage(saturnimg);
 saturn.scale= 0.2;
 saturn.setCollider("rectangle",0,0,10,10);
 saturn.depth = sun.depth-1;

uranus = createSprite(790,300,40,40);
uranus.addImage(uranusimg);
uranus.scale= 0.5;
uranus.setCollider("rectangle",0,0,10,10);
uranus.depth = sun.depth-1;

 neptune = createSprite(890,300,35,35);
 neptune.addImage(neptuneimg);
 neptune.scale= 0.09;
 neptune.setCollider("rectangle",0,0,10,10);
 neptune.depth = sun.depth-1;
}

function draw() {
  background(0);  
  textSize(20);
  textFont("phosphate");
  text("SOLAR SYSTEM",400,100);
 if(frameCount%3===0){
   sun.scale = sun.scale+0.1;
 }
if(sun.collide(mercury)){
  mercury.destroy();
}

 drawSprites();
}
