
xClick = 0;
yClick = 0;
z = 0;
var puddles = [];
var rgb = [45,49,161];
var c1 = [244,241,17];
var c2 = [0,0,0];
var c3 = [223,36,190];
var colors = [c1,c2,c3];
bgcolor = "#285988";


function setup() {
    createCanvas(windowWidth, windowHeight);
    setLineDash([5, 5]);
    setInterval(makeRandomPuddles,100);

  }


function draw() {
  
  background(bgcolor);

  for(var i = 0; i < puddles.length; i++){
    if(z == 1){
      let q = new Puddle(xClick, yClick,1);
      puddles.unshift(q);
      z = 0;
    }
    puddles[i].update();
    puddles[i].drawScreen();
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

function keyPressed(){
  if(key == 1){
    bgcolor = "#285988";
  } else if(key == 2){
    bgcolor = "#4B6479";
  } else if(key == 3){
    bgcolor = "#000000";

  }
}






class Puddle{

    constructor(x,y, opt) {
        this.x = x;
        this.y = y;
        this.d = 10;
        this.r = this.b = this.g = 0;
        this.option = opt;
        if(opt != 0){
            this.fade = 300;
        } else {
            this.fade = 150;
        }
    }

    drawScreen(){
        if(this.option != 0){
            var pick = Math.floor(Math.random()*colors.length);
            var arr = colors[pick];

            this.r = arr[0];
            this.g = arr[1];
            this.b = arr[2];
        } else if(this.option == 0){
            this.r = this.b = this.g = 255;
        }
        
        stroke(this.r,this.g,this.b, this.fade);
        strokeWeight(3);
        noFill();
        circle(this.x,this.y,this.d);

    }

    update(){
        this.d = this.d+10;
        this.fade = this.fade - 5;
    }
    
}








