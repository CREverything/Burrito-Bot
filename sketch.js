var bot,ground,realground,test,start,cam,i1,i2,i3,i4,i5,eyes,p1,p2,p3,p4,ps,fireball,e1,count;




function preload(){

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  frameRate(50)

count=0

eyes=createGroup()
ps=createGroup()
   bot=createSprite(-1060, displayHeight/2-10, 30, 30);
   bot.shapeColor="blue"

   realground=createSprite(displayWidth/2,displayHeight/2+45,5000,50)
   realground.visible=false

   ground=createSprite(displayWidth/2,displayHeight/2+25,5000,10)

i1=createSprite(-580,displayHeight/2-75, 200, 10)
i2=createSprite(-250,displayHeight/2-175, 200, 10)
i3=createSprite(500,displayHeight/2-75, 200, 10)
i4=createSprite(1170,displayHeight/2-175, 200, 10)
i5=createSprite(1500,displayHeight/2-75, 200, 10)

e1=createSprite(230,displayHeight/2-75, 30, 30)
e1.shapeColor="red"

inverse=1

fireball=createSprite(0,0,10,10)
  
  fireball.shapeColor="orange"

  fireball.visible=false

p1=createSprite(120, displayHeight/2-10, 50, 70);
p2=createSprite(190, displayHeight/2, 50, 50);

p3=createSprite(2000, displayHeight/2-10, 50, 70);
p4=createSprite(1800, displayHeight/2, 50, 50);


eyes.add(i1)
eyes.add(i2)
eyes.add(i3)
eyes.add(i4)
eyes.add(i5)

ps.add(p1)
ps.add(p2)
ps.add(p3)
ps.add(p4)



start=createSprite(-1080,displayHeight/2-10, 50, 50)
start.shapeColor="green"
end=createSprite(2490,displayHeight/2-10, 50, 50)
end.shapeColor="red"

}


function draw() {


  background(255,255,255);
  
e1.velocityX=5
inverse=e1.velocityX*-1


if(keyDown("space")&&fireball.visible==false){

  
 fireball.visible=true
 fireball.x=bot.x
 fireball.y=bot.y
fireball.velocityX=10

}

if(fireball.collide(eyes)||fireball.collide(ps)||fireball.x>2490){

  fireball.visible=false
}

if(fireball.x===bot.x+500||fireball.x>2490){

  fireball.visible=false
  fireball.velocityX=0
}

frameRate(60)

e1.velocityX=3

console.log(bot.x)


camera.x=bot.x



movement()

bot.collide(realground)
  bot.collide(eyes)
  bot.collide(ps)
  e1.collide(realground)
  e1.collide(eyes)
e1.collide(ps)


  bot.velocityY=bot.velocityY+0.7
  e1.velocityY=e1.velocityY+0.7

 if(e1.collide(p4)){

  e1.velocityX=-e1.velocityX

 }

  drawSprites();
}

function movement(){

  if(keyDown("up")){
  
    if(bot.collide(realground)||bot.collide(eyes)||bot.collide(ps)){
    bot.velocityY=-15

    }
  }


  if(keyDown("left")&&bot.x>-1060){
    
    bot.x=bot.x-5




  }

  if(keyDown("right")&&bot.x<2490){
    
    bot.x=bot.x+5



  }

  
}