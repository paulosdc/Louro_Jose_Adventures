
var x = 0, y = 150, up = false, altM, vivo = true;

var altura = [];
var i = 0;
var distancia = 175;
var nivel = 1;
var acabou = false;

var sd = 0;
for(var c = 0; c<=30; c++){
  altura[c] = Math.floor(Math.random()*250)+50;
}



function setup() {
  createCanvas(600, 400);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    up = true;
    altM = y - 40;
  }
}


function cenario() { //Como deixar os obstaculos solidos?
  
  x += 3;
  translate(-x, 0);
  background(220);

}
function obstaculos(){ 
  fill(150);
  for(var a = 0; a<=250 && i<=20; a=a+4){
    
    rect(300 + distancia*(a), altura[i]+90, 30, 300);
    rect(300 + distancia*(a), -1, 30, altura[i]);
    
  
    rect(300 + distancia*(a+1), altura[i+1]+90, 30, 300);
    rect(300 + distancia*(a+1), -1, 30, altura[i+1]);

    rect(300 + distancia*(a+2), altura[i+2]+90, 30, 300);
    rect(300 + distancia*(a+2), -1, 30, altura[i+2]);
 
    rect(300 + distancia*(a+3), altura[i+3]+90, 30, 300);
    rect(300 + distancia*(a+3), -1, 30, altura[i+3]);

  }
}


function movimentacao() {
  if (up == true)  {
    y-=4;
    if (y == altM) {
      up = false;
    }
  }
  if (up == false)  {
    if (y  != 380) {
      y+=2;
    }
  }
}

function estado() {
   if (y == 20 || y ==380) {
      vivo = false;
   }
  return vivo;
}

function draw() {
  
  
  cenario();
  
  obstaculos(); 
  
  movimentacao();
  if (estado() == false) {

  }
  fill(50);
  textSize(20);
  text("Velocidade: 1x",x+30,40);
  
  if (mouseIsPressed) {
    textSize(10);
    text("Use a seta para cima", x+460, 30);
    text("para mover o personagem", x+450, 45);
   
  } else {
    text("INFO", x+480, 37.5);
  }
  
  ellipse(x+60, y,40,40);
}
