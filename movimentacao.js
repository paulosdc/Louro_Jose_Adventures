const movimentacao = function () {
  if (up == true) {
    y -= velocidadeY;
    if (y == altMaxima) {
      up = false;
    }
  }
  if (up == false) {
    if (y != 380) {
      y += (velocidadeY / 2);
    }
  }
}

const estado = function () {
  if (y <= 20 || y == 380 || hit == true) {
    velocidadeX = 0;
    velocidadeY = 0;
    fill("#000000");
    textSize(80);
    text("Morreu", x+180, 210);
    //tem que colocar algo para fazer aparecer "morreu" durante um tempo antes de reiniciar;
    modo = 0;
  }
}

const info = function () {
  fill(50);
  textSize(10);
  var numBarras = parseInt(x / (distancia+20));
  text("Número de barras: " + (numBarras), x + 30, 50);
  text("Dificildade: "+ nivel, x + 30, 40);
  if (mouseIsPressed) {
      textSize(10);
      text("Use a seta para cima" + "\n" + "para mover o personagem", x + 460, 30);
  } else {
      text("INFO", x + 480, 37.5);
  }
}