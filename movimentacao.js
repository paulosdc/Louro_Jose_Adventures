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
    vivo = false;
    fill("#000000");
    textSize(80);
    text("Morreu", x + 180, 210);
    textSize(20);
    text("Pontuação: " + numBarras, x + 245, 230);
    textSize(20);
    text("Pressione 1 para jogar novamente", x + 120, 380);
  }
}

const info = function () {
  fill(50);
  textSize(10);
  numBarras = parseInt(x / (distancia + 20));
  text("Número de barras: " + (numBarras), x + 30, 40);
  text("Dificildade: " + nivel, x + 30, 30);
  if (mouseIsPressed) {
    textSize(10);
    text("Use a seta para cima para" + "\n" + "    mover o personagem", x + 460, 30);
  } else {
    textSize(20);
    text("INFO", x + 500, 37.5);
  }
}