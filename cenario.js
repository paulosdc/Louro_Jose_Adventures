const selectLevel = function () {
    alert("Selecione um nível a seguir antes de iniciar o jogo!");
    nivel = parseInt(prompt("*Nível 1: Muito fácil\n*Nível 2: Fácil\n*Nível 3: Médio\n*Nível 4: Difícil\n*Nível 5: Muito difícil"));
    if (nivel == 1) {
        velocidadeX = 3;
        velocidadeY = 4;
        barras = 100;
    }
    if (nivel == 2) {
        velocidadeX = 4;
        velocidadeY = 4;
        barras = 125;
    }
    if (nivel == 3) {
        velocidadeX = 5;
        velocidadeY = 4;
        barras = 150;
    }
    if (nivel == 4) {
        velocidadeX = 6;
        velocidadeY = 4;
        barras = 175;
    }
    if (nivel == 5) {
        velocidadeX = 6.5;
        velocidadeY = 4;
        barras = 200;
    }
    if(nivel == null) {
        selectLevel();
    }
}

const cenario = function () {
    x += velocidadeX;
    translate(-x, 0);
    background(220);
    fill(150);
    for (var a = 0; a <= barras; a = a + 4) {
        obstaculos(a)
    }
}

const obstaculos = function (aux) {
    rect(300 + distancia * aux, altura[0] + 100, 30, 300, 100); //de baixo
    rect(300 + distancia * aux, -15, 30, altura[0], 100); //de cima  
    rect(300 + distancia * (aux + 1), altura[1] + 100, 30, 300, 100);
    rect(300 + distancia * (aux + 1), -15, 30, altura[1], 100);
    rect(300 + distancia * (aux + 2), altura[2] + 100, 30, 300, 100);
    rect(300 + distancia * (aux + 2), -15, 30, altura[2], 100);
    rect(300 + distancia * (aux + 3), altura[3] + 100, 30, 300, 100);
    rect(300 + distancia * (aux + 3), -15, 30, altura[3], 100);
    
}

const randomAlt = function () {
    if (x % 400  == 0) {
        altura[0] = Math.random() * (250 - 50) + 50;
    } if (x % 500 == 0) {
        altura[1] = Math.random() * (250 - 50) + 50;
    } if (x % 600 == 0) {
        altura[2] = Math.random() * (250 - 50) + 50;
    } if (x % 700 == 0) {
        altura[3] = Math.random() * (250 - 50) + 50;
    }
}