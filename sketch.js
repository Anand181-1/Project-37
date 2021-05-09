var canvas;
var gameState = 0;
var contestantCount = 0;
var database, quiz, question, contestant;
var tick;

function preload(){
 tick = loadImage("Correct.png");
}

function setup(){
  database = firebase.database();
  
  canvas = createCanvas(850,400);

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(gameState === 1){
    image(tick, 243, 167, 25, 25);
  }
}
