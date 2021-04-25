const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops = 100;
var drops = [];

function preload(){
    
}

function setup(){
    var canvas = createCanvas(800, 800)
    engine = Engine.create();
    world = engine.world;
if(frameCount % 150 == 0){
    for(var i=0;i<maxDrops;i++){
        drops.push(new Drops(random(0,800), random(0,800)))
    }
}
}

function draw(){
    background("black");
    Engine.update(engine);
    for(var a = 0;a<drops.length;a++){
        drops[a].display();
    }
}   

