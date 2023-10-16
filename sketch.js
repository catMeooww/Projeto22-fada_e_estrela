var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
    fairy_img = loadImage("images/fairyImage1.png");
    fairy_speak = loadSound("sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(1350, 600);

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 30 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

    fairyBody = Bodies.rectangle(10,300,300,320, {isStatic:true});
    World.add(world,fairyBody);
	
	Engine.run(engine);

    fairy_speak.play();
}

function draw(){
    background(17, 17, 68);
    star = image(starImg,starBody.position.x,starBody.position.y,60,60);
    fairy = image(fairy_img,fairyBody.position.x,fairyBody.position.y,300,320);
    if(fairyBody.position.x > 400 && starBody.position.y < 370){
        Matter.Body.setStatic(starBody,false);
    }
    if(starBody.position.y > 380){
        Matter.Body.setStatic(starBody,true);
    }
}
window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed==39 && starBody.position.y < 370){
     fairyBody.position.x = fairyBody.position.x + 3;
    }
}
