var width, height, rootX, rootY, h, hMax, hSpeed, l, lMax, lSpeed, d, dMax, leaves, leafCoords, bracket, bracketIsFinished;

function setup() {
  setVariables();
  createCanvas(width, height);

  stroke(0);
  strokeWeight(3);
  fill(255, 0, 0);

  bracket = new Bracket(rootX, rootY);
  leaves = [];
}

function draw() {
  background(255);
  bracketIsFinished = h == hMax && l == lMax

  bracket.drawBracket();
  increment();

  if(bracketIsFinished) {
    translate(0, 0);
    if(leaves.length == 0) {
      leaves = getLeaves(bracket.root);
    }
    drawLeaves(leaves);
  }
}

function getLeaves(node) {
  if(node.isLeaf()) {
    return[node];
  }

  return getLeaves(node.childUp).concat(getLeaves(node.childDown));
}

function drawLeaves(leaves) {
  leaves.forEach(function(leaf) {
    leaf.drawNode();
    if(leaf.hasGravity) {
      leaf.y++;
    }
  })
  if (d < dMax) { d++; }
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