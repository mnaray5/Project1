
d = 10;
fade = 255;
xClick = yClick = 0;
z = 0;
var puddles = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    setLineDash([5, 5]);
  }


function draw() {
  
  background("#285988");
  noFill();
  stroke(175,205,234,fade);
  strokeWeight(3);
  circle(300,200,d);
  circle(900,650,d);
  circle(xClick,yClick,d);
  //circle(random(windowWidth),random(windowHeight),d);

  d = d+10;
  fade = fade-5;

  if(fade <=0){
    fade = 255;
    d = 10;
  }

  
}

function makeRandomPuddles(){
  let p = new Puddle(random(100, windowWidth-50), random(100, windowHeight-50),0);
  puddles.push(p);
  puddles.add = 5;
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function mousePressed(){
    xClick = mouseX;
    yClick = mouseY;
    z = 1;
    
}


class Puddle{
  constructor(x,y, opt) {
    this.x = x;
    this.y = y;
    this.d = 10;
    this.option = opt;
    if(opt != 0){
        this.fade = 300;
    } else {
        this.fade = 150;
    }
  }
}

