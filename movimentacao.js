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
  if (y <= 20 || y == 380) {
    velocidadeX = 0;
    velocidadeY = 0;
    fill("#000000");
    textSize(80);
    text("Morreu", x+180, 210);
  }
}
