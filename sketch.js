
xClick = 0;
yClick = 0;
z = 0;
k = 1;
var puddles = [];

bgcolor = "#285988";

c1 = [255,255,255];
c2 = [65,76,94];
c3 = [186,212,251];
colors1 = [c1,c2,c3];

c4 = [100,115,125];
c5 = [57,74,86];
c6 = [155,156,157];
colors2 = [c4,c5,c6];

c7 = [244,241,17];
c8 = [39,243,124];
c9 = [223,36,190];
c10 = [165,39,243];
c11 = [241,73,178];
c12 = [216,255,12];
colors3 = [c7,c8,c9,c10,c11,c12];

colors = [colors1,colors2,colors3];

dc1 = [203, 248, 255];
dc2 = [35,40,61];
f1 = [116,255,121];
f2 = [49,249,255];
f3 = [255,0,0];
f4 = [255,124,12];
f5 = [249,227,93];
dColors = [dc1,dc2];
fColors = [f1,f2,f3,f4,f5];
  

function setup() {
    createCanvas(windowWidth, windowHeight);
    setLineDash([5, 5]);
    setInterval(makeRandomPuddles,100);
    window.alert("USER INSTRUCTIONS: Rain Puddles makes random puddles on your screen. Click anywhere on the screen to create your own puddles! There are 3 different modes - Press 1, 2 or 3 on the keyboard to see the different variations!");


  }


function draw() {
  
  background(bgcolor);

  for(var i = 0; i < puddles.length; i++){
    if(z == 1){
      let q = new Puddle(xClick, yClick,k+3);
      puddles.unshift(q);
      z = 0;
    }
    puddles[i].drawScreen();
  } 

  
}

function makeRandomPuddles(){
  let p = new Puddle(random(100, windowWidth-50), random(100, windowHeight-50),k);
  puddles.push(p);
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
    k = 1;
    puddles = [];
  } else if(key == 2){
    bgcolor = "#4B6479";
    k = 2;
    puddles = [];
  } else if(key == 3){
    bgcolor = "#030021";
    k = 3;
    puddles = [];
  }
}






class Puddle{

    constructor(x,y, opt) {
        this.x = x;
        this.y = y;
        this.d = 10;
        this.r = this.b = this.g = 0;
        this.option = opt;
        this.randFColor = Math.floor(Math.random()*fColors.length);
        if(opt > 3){
            this.fade = 300;
        } else {
            this.fade = 150;
        }
    }

    drawScreen(){
        if(this.option > 3){
          var cArr = colors[this.option-4];
          var pick = Math.floor(Math.random()*cArr.length);
          var arr = cArr[pick];

          this.r = arr[0];
          this.g = arr[1];
          this.b = arr[2];

        } else if(this.option == 1 || this.option == 2){
          var arr = dColors[this.option-1];
          this.r = arr[0];
          this.g = arr[1];
          this.b = arr[2];
        } else if(this.option == 3){
          var arr = fColors[this.randFColor];
          this.r = arr[0];
          this.g = arr[1];
          this.b = arr[2];
        }
        
        stroke(this.r,this.g,this.b, this.fade);
        strokeWeight(4);
        noFill();
        circle(this.x,this.y,this.d);
        circle(this.x,this.y,this.d-10);

        this.d = this.d+10;
        this.fade = this.fade - 5;

    }
    
}








