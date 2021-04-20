var road0;
var boy0;
var diamond0;
var cash0;
var jwell0;
var ruby0;
var sword0;
var play=0;
var end=1;
var gameState=play;
var score;
var over0;



function preload(){
 road=loadImage("Road.png"); 
  boy=loadAnimation("runner1.png","runner2.png");
  diamond=loadImage("diamonds.png");
  cash=loadImage("cash.png");
  jwell=loadImage("jwell.png");
  ruby=loadImage("ruby.png");
  sword=loadImage("sword.png");
  over=loadImage("gameOver.png");
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  roads();
  boys();
  Diamond=new Group();
  Cash=new Group();
  Jwell=new Group();
  Ruby=new Group();
  Sword=new Group();
  
  over1();
  
  score=0;
  
}

function draw(){
  
  if(gameState===play){
    
    
     boy0.x=mouseX;
    
     if(road0.y>height){
    road0.y=height/2;
  }
    
     
    over0.visible=false;
    
  diamond1();
    if(boy0.isTouching(Diamond)){
      Diamond.destroyEach();
      score=10;
    }
    
  cash1();
    if(boy0.isTouching(Cash)){
      Cash.destroyEach();
      score=20;
      
      
    }
    
  jwell1();
    if(boy0.isTouching(Jwell)){
      Jwell.destroyEach();
      score=30;
    }
    
  ruby1();
    if(boy0.isTouching(Ruby)){
      Ruby.destroyEach();
      score=40;
    }
    
  sword1();
    if(boy0.isTouching(Sword)){
      gameState=end;
    }
    
  }
  
 

  
  if(gameState===end){
    road0.velocityY=0;
    
    Diamond.setVelocityYEach(0);
    Diamond.setLifetimeEach(-1);
    
    Cash.setVelocityYEach(0);
    Cash.setLifetimeEach=-1;
    
    Ruby.setVelocityYEach(0);
    Ruby.setLifetimeEach(-1);
    
    Jwell.setVelocityYEach(0);
    Jwell.setLifetimeEach(-1);
    
    Sword.setVelocityYEach(0);
    Sword.setLifetimeEach(-1);
    
    over0.visible=true;
    
  }
  
  
  drawSprites();
  textFont("algerian");
  text("score"+score,width/2,height-480);
  
}

function roads(){
  road0=createSprite(width/2,height/2,20,20);
  road0.addImage("r",road);
  road0.velocityY=5;
}

function boys(){
  boy0=createSprite(width/2,height-20,20,20);
  boy0.addAnimation("b",boy);
  boy0.scale=0.1;
  
}

function diamond1(){
  if(frameCount%60===0){
  diamond0=createSprite(random(width),height-500,20,20);
   diamond0.addImage("d",diamond);
  diamond0.scale=0.060;
    diamond0.velocityY=5;
    diamond0.lifetime=200;
    
     Diamond.add(diamond0);
    
}
} 

function cash1(){
  if(frameCount%80===0){
  cash0=createSprite(20,height-500,20,20);
  cash0.addImage("c",cash);
  cash0.x=Math.round(random(width));
    cash0.scale=0.1;
    cash0.velocityY=5;
    cash0.lifetime=200;
    
   Cash.add(cash0);
  
  
}
}


function jwell1(){
  if(frameCount%120===0){
  jwell0=createSprite(random(width),height-500,20,20);
  jwell0.addImage("j",jwell);
    jwell0.scale=0.1;
    jwell0.velocityY=5;
    jwell0.lifetime=200;
    
    Jwell.add(jwell0);
}
}

function ruby1(){
  if(frameCount%140===0){
  ruby0=createSprite(20,height-500,20,20);
  ruby0.addImage("r",ruby);
  ruby0.x=Math.round(random(width));
  ruby0.scale=0.1;
  ruby0.velocityY=5;
  ruby0.lifetime=200;
  
  Ruby.add(ruby0);
  
}
}

function sword1(){
  if(frameCount%160===0){
  sword0=createSprite(random(width),height-500,20,20);
  sword0.addImage("s",sword);
  sword0.scale=0.1;
  sword0.velocityY=5;
  sword0.lifetime=200;
    Sword.add(sword0);
  
}
}

function over1(){
  over0=createSprite(width/2,height/2,20,20);
  over0.addImage("o",over);
}