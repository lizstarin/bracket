var width, height, rootX, rootY, h, hMax, hSpeed, l, lMax, lSpeed, d, dMax, leaves, bracket;

function setup() {
  setVariables();
  createCanvas(width, height);

  stroke(0);
  strokeWeight(3);
  fill(255, 0, 0);

  bracket = new Bracket(0, 0);
}

function draw() {
  background(255);
  leaves = [];

  translate(rootX, rootY);
  bracket.drawBracket();

  increment();

  if (h == hMax && l == lMax) {
    bracket.drawLeaves();
    bracket.normalizeLeaves();
  }

  // bracket.physics();
}

function setVariables() {
  width = 600;
  height = 600;

  rootX = width;
  rootY = height / 2;

  h = 0;
  hMax = 400;
  hSpeed = 4;

  l = 0;
  lMax = 100;
  lSpeed = 2;

  d = 0;
  dMax = 20;
}

function increment() {
  if (h < hMax) { h+= hSpeed; }
  if (l < lMax) { l+= lSpeed; }
}