var x = 0, y = 150, up = false, altM, vivo = true;

function setup() {
  createCanvas(600, 400);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    up = true;
    altM = y - 40;
  }
}

function cenario() {
  x += 3;
  translate(-x, 0);
  background(220);
  var altura = random(50,250);
  var distancia = 175;
  for(var a = 1; a<=250; a++){
    rect(300 + distancia*a, altura+90, 30, 300);
    rect(300 + distancia*a, -1, 30, altura);
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
  movimentacao();
  if (estado() == false) {
    
  }
  ellipse(x+60, y,40,40);
}