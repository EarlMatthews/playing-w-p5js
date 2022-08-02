let x = 10
function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  background(220);
  ellipse(50,50,80,80);
  ellipse(x, height/2, 20, 20);
  x = x + 1;
}