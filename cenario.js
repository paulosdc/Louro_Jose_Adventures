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
    background(imgFundo);
    fill(150);
    obstaculos();
}

const obstaculos = function () {
    posX = [posX[0] - velocidadeX, posX[1] - velocidadeX, posX[2] - velocidadeX, posX[3] - velocidadeX];
    fill('green');
    rect(posX[0], altura[0] + 100, 30, 300, 100); //de baixo
    rect(posX[0], -15, 30, altura[0], 100); //de cima
    rect(posX[1], altura[1] + 100, 30, 300, 100);
    rect(posX[1], -15, 30, altura[1], 100);
    rect(posX[2], altura[2] + 100, 30, 300, 100);
    rect(posX[2], -15, 30, altura[2], 100);
    rect(posX[3], altura[3] + 100, 30, 300, 100);
    rect(posX[3], -15, 30, altura[3], 100);
    if (posX[0] <= -30) {
        posX[0] = posX[3] + 175;
        altura[0] = Math.random() * (250 - 50) + 50;
    }
    if (posX[1] <= -30) {
        posX[1] = posX[0] + 175;
        altura[1] = Math.random() * (250 - 50) + 50;
    }
    if (posX[2] <= -30) {
        posX[2] = posX[1] + 175;
        altura[2] = Math.random() * (250 - 50) + 50;
    }
    if (posX[3] <= -30) {
        posX[3] = posX[2] + 175;
        altura[3] = Math.random() * (250 - 50) + 50;
    }
    if ((posX[0] <= 60 || posX[1] <= 60 || posX[2] <= 60 || posX[3] <= 60) && vivo == true) {
        numBarras++;
    } 
}

const colisao = function () {
    hit[0] = collideRectCircle(posX[0]-22, altura[0] + 85, 30, 300, 60, y, 40);
    hit[1] = collideRectCircle(posX[0]-22, -25, 30, altura[0], 60, y + 10, 40);
    hit[2] = collideRectCircle(posX[1]-22, altura[1] + 85, 30, 300, 60, y, 40);
    hit[3] = collideRectCircle(posX[1]-22, -25, 30, altura[1], 60, y + 10, 40);
    hit[4] = collideRectCircle(posX[2]-22, altura[2] + 85, 30, 300, 60, y, 40);
    hit[5] = collideRectCircle(posX[2]-22, -25, 30, altura[2], 60, y + 10, 40);
    hit[6] = collideRectCircle(posX[3]-22, altura[3] + 85, 30, 300, 60, y, 40);
    hit[7] = collideRectCircle(posX[3]-22, -25, 30, altura[3], 60, y + 10, 40);
}