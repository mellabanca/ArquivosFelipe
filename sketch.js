const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var Zoro = "NO ESTILINGUE";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

    //tipos de dados
    //tiposDeDados();

    //exemplo de matriz
   // exemploMatriz();
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
    
    getTime();
}

function mouseDragged(){
    if(Zoro !== "gomu gomu no pistol"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
    
}

function mouseReleased(){
    slingshot.fly();
    Zoro = "gomu gomu no pistol";
}
function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}

async function getTime(){
    var resposta = await fetch("http://worldtimeapi.org/api/timezone/Europe/London");
    var respostaJSON = await resposta.json();
    var dateTime = respostaJSON.datetime;
    var hora = dateTime.slice(11,13);
    console.log(hora);
}


function tiposDeDados(){
//Exemplos sobre os diferentes tipos de dados em javascript

//Número
var numero = 22;
console.log(numero);

//String
var string = "Você perdeu! Game over!";
console.log(string);

//Booleano
var booleano = true;
console.log(booleano);

//Indefinido
var objeto;
console.log(objeto);

//Nulo
objeto = null;
console.log(objeto);
}

function exemploMatriz(){
    var matriz1 = [1,2,3,4,5];
    console.log(matriz1[2]);
    matriz1.pop();
    console.log(matriz1);

    var matriz2 = [1,"Melissa",false];
    console.log(matriz2);
    matriz2.push("mcDonalds");
    console.log(matriz2);

   // var matriz3 = [matriz1,matriz2];
   // console.log(matriz3);
   // console.log(matriz3[1][1]);

}