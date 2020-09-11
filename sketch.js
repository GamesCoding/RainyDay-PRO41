const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bruceWayne, thunder;

var thunder, thunder1, thunder2, thunder3, thunder4;

var rand;

var thunderCreatedFrame = 0;

var drops = [];

var maxDrops = 100;

function preload(){
    thunder1 = loadImage("Imgs/thunderbolt/1.png");
    thunder2 = loadImage("Imgs/thunderbolt/2.png");
    thunder3 = loadImage("Imgs/thunderbolt/3.png");
    thunder4 = loadImage("Imgs/thunderbolt/4.png");
}

function setup(){
  var canvas = createCanvas(400,710);

  engine = Engine.create();
  world = engine.world;

  bruceWayne = new Umbrella(200,580); 

  //thunder = createSprite(100,100,200,200);

  if(frameCount%150 === 0){
  for(var j=0; j<maxDrops; j++){
    drops.push(new Drops(random(0,400),random(0,400)));
  }
}

  //rain = new Drops()
}

function draw(){
    background("black");
    Engine.update(engine);

    bruceWayne.display();

    for(var j=0; j<maxDrops; j++){
      drops[j].display();
    }

    for(var j=0; j<maxDrops; j++){
      drops[j].update();
    }

    rand = Math.round(random(1,4));

    if(frameCount%80 === 0) {
      thunderCreatedFrame = frameCount;
      thunder = createSprite(random(10,370),random(10,30),10,10);

    switch(rand){
      case 1 : thunder.addImage(thunder1);
      break;
      case 2 : thunder.addImage(thunder2);
      break;
      case 3 : thunder.addImage(thunder3);
      break;
      case 4 : thunder.addImage(thunder4);
      break;
      default : break;
    }

    thunder.scale = random(0.3,0.6);
  }

  if(thunderCreatedFrame + 10 === frameCount && thunder){
    thunder.destroy();
  }

  drawSprites();
}   

