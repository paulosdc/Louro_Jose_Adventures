var x = 0, y = 150, up = false, altMaxima = 0, vivo = true;
var velocidadeX, velocidadeY, altura = [], hit = [], posX = [495, 670, 845, 1020];
let imgLoro, imgMenu, imgFundo;
var modo, nivel, numBarras = 0;

for (var i = 0; i < 4; i++) {
  altura[i] = Math.random() * (250 - 50) + 50;
}

for (var i = 0; i < 8; i++) {
  hit[i] = false;
}

function preload() {
  if(up == true){
    imgLoro = loadImage('https://raw.githubusercontent.com/nstx/LOP/master/louro1.png');
  }else{
    imgLoro = loadImage('https://raw.githubusercontent.com/nstx/LOP/master/louro2.png');
  }
  imgMenu = loadImage('https://raw.githubusercontent.com/nstx/LOP/master/menu1.jpg');
  imgFundo = loadImage('https://raw.githubusercontent.com/nstx/LOP/master/Sem-T%C3%ADtulo-1.jpg');
}

function setup() {
  modo = 0;
  createCanvas(600, 400);
  frameRate(60);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    up = true;
    altMaxima = y - 40;
  }
}

function draw() {
  clear();
  if(modo == 0){
    image(imgMenu,0,0,600,400);
    vivo = true;
  }
  if(modo == 1){
    cenario();
    movimentacao();
    info();
    estado();
    colisao();
    //ellipse(60, y, 40, 40);
    image(imgLoro, 60, y, 40, 40);
  }
}

selectLevel();
draw();
