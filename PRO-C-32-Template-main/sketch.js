const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
   var responseJson = response.json()
   var daytime = responseJson.datetime
   var hour = daytime.slice(11,17)

   if(hour>=04 && hour<=06){
       bg = "sunrise1.png";
   }else if (hour>=06 && hour<=08){
       bg = "sunrise2.png";
   }else if(hour>=23 && hour ==0){
       bg = "surise10.png";
   }else if(hour==0 && hour<=03){
       bg = "sunset11.png";
   }else{
       bg = "sunset12.png";
   }

   backgroundImg = loadImage(bg);
}
