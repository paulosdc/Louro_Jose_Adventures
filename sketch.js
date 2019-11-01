var x = 0, y = 150, up = false, altMaxima, vivo = true;
var velocidadeX, velocidadeY, barras, distancia, altura = [];

for(var i = 0; i<4; i++) {
  altura[i] = Math.random() * (250 - 50) + 50;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    up = true;
    altMaxima = y - 40;
  }
}

function cenario() {
  x += velocidadeX;
  translate(-x, 0);
  background(220);
  for(var a = 0; a<=barras; a=a+4){
    rect(300 + distancia*a, altura[0]+90, 30, 300);
    rect(300 + distancia*a, -1, 30, altura[0]);
    
    rect(300 + distancia*(a+1), altura[1]+90, 30, 300);
    rect(300 + distancia*(a+1), -1, 30, altura[1]);
    
    rect(300 + distancia*(a+2), altura[2]+90, 30, 300);
    rect(300 + distancia*(a+2), -1, 30, altura[2]);
    
    rect(300 + distancia*(a+3), altura[3]+90, 30, 300);
    rect(300 + distancia*(a+3), -1, 30, altura[3]); 
  }
}

function movimentacao() {
  if (up == true)  {
    y-=velocidadeY;
    if (y == altMaxima) {
      up = false;
    }
  }
  if (up == false)  {
    if (y  != 380) {
      y+=(velocidadeY/2);
    }
  }
}

function estado() {
   if (y == 20 || y ==380) {
      vivo = false;
   }
  return vivo;
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  cenario();
  movimentacao();
  ellipse(x+60, y,40,40);
}

function selectLevel() {
  nivel = parseInt(prompt("Nivel 1 (facil) ou 2 (dificil): "));
  if (nivel == 1) {
    velocidadeX = 3;
    velocidadeY = 4;
    barras = 200;
    distancia = 175;
  } else if ((nivel == 2)) {

  } else {
    selectLevel();
  }
}

selectLevel();
draw();