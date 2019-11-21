const selectLevel = function () {
    keyTyped();
}

function keyTyped() {
    if (modo != 1) {
        if (key === '1') {
            modo = 1;
            nivel = 1;
            velocidadeX = 3;
            velocidadeY = 4;
            barras = 100;
        }
        if (key === '2') {
            modo = 1;
            nivel = 2;
            velocidadeX = 4;
            velocidadeY = 4;
            barras = 125;
        }
        if (key === '3') {
            modo = 1;
            nivel = 3;
            velocidadeX = 5;
            velocidadeY = 4;
            barras = 150;
        }
        if (key === '4') {
            modo = 1;
            nivel = 4;
            velocidadeX = 6;
            velocidadeY = 4;
            barras = 175;
        }
        if (key === '5') {
            modo = 1;
            nivel = 5;
            velocidadeX = 6.5;
            velocidadeY = 4;
            barras = 200;
        }
    }
    if (vivo == false) {
        if (key == '1') {
            modo = 0;
            window.location.reload(true);
        }
    }
}

const cenario = function () {
    background(220);
    fill(150);
    obstaculos();
}

const obstaculos = function () {
    x += velocidadeX;
    rect(300 + distancia - x, altura[0] + 100, 30, 300, 100); //de baixo
    rect(300 + distancia - x, -15, 30, altura[0], 100); //de cima
    rect(300 + distancia * 2 - x, altura[1] + 100, 30, 300, 100);
    rect(300 + distancia * 2 - x, -15, 30, altura[1], 100);
    rect(300 + distancia * 3 - x, altura[2] + 100, 30, 300, 100);
    rect(300 + distancia * 3 - x, -15, 30, altura[2], 100);
    rect(300 + distancia * 4 - x, altura[3] + 100, 30, 300, 100);
    rect(300 + distancia * 4 - x, -15, 30, altura[3], 100);
}

const colisao = function () {
    hit[0] = collideRectCircle(300 + distancia - x, altura[0] + 100, 30, 300, 60, y, 40, 40);
    hit[1] = collideRectCircle(300 + distancia - x, -15, 30, altura[0], 60, y, 40, 40);
    hit[2] = collideRectCircle(300 + distancia * 2 - x, altura[1] + 100, 30, 300, 60, y, 40, 40);
    hit[3] = collideRectCircle(300 + distancia * 2 - x, -15, 30, altura[1], 60, y, 40, 40);
    hit[4] = collideRectCircle(300 + distancia * 3 - x, altura[2] + 100, 30, 300, 60, y, 40, 40);
    hit[5] = collideRectCircle(300 + distancia * 3 - x, -15, 30, altura[2], 60, y, 40, 40);
    hit[6] = collideRectCircle(300 + distancia * 4 - x, altura[3] + 100, 30, 300, 60, y, 40, 40);
    hit[7] = collideRectCircle(300 + distancia * 4 - x, -15, 30, altura[3], 60, y, 40, 40);
}