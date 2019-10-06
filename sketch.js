  var x = 50;
    var y = 280;
    var dir = 0;
    var m = 0;
    function setup() {
      createCanvas(400, 400);
    }
    function keyPressed() {
      if (keyCode === UP_ARROW) {
      dir = 1;
    }
  }
  function draw() {
    background("#00FF7F");
    square(0,300,400);//chão
    rect(350, 250, 20, 50);//obstáculo
    if (keyIsDown(LEFT_ARROW)) {//ir pra esquerda
      x-=5;
    }
    if (keyIsDown(RIGHT_ARROW))  {//ir pra direita
      x+=5;
    }
    if (dir==1)  {//subir e, ao atingir uma altura máxima, descer
      for(var i = 0; i<=1; i++) {
        if(y!=230){
          y-=1;
          if(y==231)
          m = 1;
        }
      }
      if (dir==1){//descida
        if(m==1 && y<280){
          y+=3;
        }
      }
    }
    ellipse(x,y,40,40);
  }