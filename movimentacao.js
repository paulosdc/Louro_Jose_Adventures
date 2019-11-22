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
  var bateu = 0;
  for (var i = 0; i < 8; i++) {
    if (hit[i] == true) {
      bateu = 1;
      break;
    }
  }
  if (y <= -1 || y == 366 || bateu == 1) {
    velocidadeX = 0;
    velocidadeY = 0;
    vivo = false;
    fill("#000000");
    textSize(80);
    text("Morreu", 180, 210);
    textSize(20);
    text("Pontuação: " + parseInt(numBarras/30), 245, 230);
    textSize(20);
    text("Pressione 1 para jogar novamente", 150, 380);
  }
}

const info = function () {
  fill(50);
  textSize(10);
  text("Número de barras: " + (parseInt(numBarras/30)), 30, 40);
  text("Dificildade: " + nivel, 30, 30);
  if (mouseIsPressed) {
    textSize(10);
    text("Use a seta para cima para" + "\n" + "    mover o personagem", 460, 30);
  } else {
    textSize(20);
    text("INFO", 500, 37.5);
  }
}