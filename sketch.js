var x = 0, y = 150, up = false, altMaxima, vivo = true;
var velocidadeX, velocidadeY, barras, distancia = 175, altura = [], hit = false;
let imgLoro, imgMenu;
var modo, nivel;

for (var i = 0; i < 4; i++) {
  altura[i] = Math.random() * (250 - 50) + 50;
}



function preload() {
  if(up == true){
    imgLoro = loadImage('https://raw.githubusercontent.com/nstx/LOP/master/louro1.png');
  }else{
    imgLoro = loadImage('https://raw.githubusercontent.com/nstx/LOP/master/louro2.png');
  }
  imgMenu = loadImage('https://raw.githubusercontent.com/nstx/LOP/master/menu1.jpg');
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
function keyTyped(){
  if(key === '1'){
    modo = 1;
    nivel = 1;
    velocidadeX = 3;
    velocidadeY = 4;
    barras = 100;
  }
  if(key === '2'){
    modo = 1;
    nivel = 2;
    velocidadeX = 4;
    velocidadeY = 4;
    barras = 125;
  }
  if(key === '3'){
    modo = 1;
    nivel = 3;
    velocidadeX = 5;
    velocidadeY = 4;
    barras = 150;
  }
  if(key === '4'){
    modo = 1;
    nivel = 4;
    velocidadeX = 6;
    velocidadeY = 4;
    barras = 175;
  }
  if(key === '5'){
    modo = 1;
    nivel = 5;
    velocidadeX = 6.5;
    velocidadeY = 4;
    barras = 200;
  }
}

function draw() {
  clear();
  if(modo == 0){
    image(imgMenu,0,0,600,400);
  }
  if(modo == 1){
    cenario();
    movimentacao();
    info();
    estado();
    randomAlt();
    fill(50);
    //ellipse(x + 60, y, 40, 40);
    image(imgLoro, x + 60, y, 40, 40);
  }
  
}

//selectLevel();
draw();
