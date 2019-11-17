var x = 0, y = 150, up = false, altMaxima, vivo = true;
var velocidadeX, velocidadeY, barras, distancia = 175, altura = [], hit = false;
var imgLoro;

for (var i = 0; i < 4; i++) {
  altura[i] = Math.random() * (250 - 50) + 50;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    up = true;
    altMaxima = y - 40;
  }
}

function preload() {
  if (up == true) {
    imgLoro = loadImage("louro1.png");
  } else {
    imgLoro = loadImage("louro2.png");
  }
}

function setup() {
  createCanvas(600, 400);
  frameRate(60);
}

function draw() {
  cenario();
  movimentacao();
  info();
  estado();
  randomAlt();
  //fill(50);
  //ellipse(x + 60, y, 40, 40);
  image(imgLoro, x + 60, y, 40, 40);
}

selectLevel();
draw();
