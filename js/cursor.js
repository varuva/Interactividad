let size = 42;
let fillColor = 0;
let strokeColor = 255;
let x = 0, y = 0, friction = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60);
}

function draw() {
  background(0, 50, 200, 60); 
  updateCursor();
}

function updateCursor() {
  stroke(strokeColor);
  strokeWeight(2);
  x += (mouseX - x) * friction;
  y += (mouseY - y) * friction;
  ellipse(x, y, size, size);
}
  