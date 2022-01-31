
d = 10;
fade = 255;

function setup() {
    createCanvas(windowWidth, windowHeight);
    setLineDash([5, 5]);
  }


function draw() {
  
  background("#CBF8FF");
  noFill();
  stroke(45,49,161,fade);
  strokeWeight(3);
  circle(300,200,d);

  circle(450,600,d);

  d = d+10;
  fade = fade-5;

  
}


function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function mousePressed(){
    xClick = mouseX;
    yClick = mouseY;
    console.log("(" + xClick + ", " + yClick + ")");
}

