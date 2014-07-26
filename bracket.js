var h, hMax, hSpeed, l, lMax, lSpeed, d, dMax, leaves;

function setup() {
  setVariables();
  createCanvas(600, 600);

  stroke(0);
  strokeWeight(3);
  fill(255, 0, 0);

  root = new Node(0, 0);
}

function draw() {
  background(255);
  leaves = [];

  translate(width - 30, height / 2);
  branch(h, l, root);

  increment();

  if (h == hMax && l == lMax) {
    drawLeaves();
    normalizeLeaves();
    if (d == dMax) {
      noLoop();
    }
  }

  physics();
}

function setVariables() {
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

function branch(h, l, node) {
  h *= .4;

  if (h > 30) {
    drawFork(node.x, node.y, d, h, l);

    node.childUp = new Node(node.x - l, node.y - h);
    branch(h, l, node.childUp);

    node.childDown = new Node(node.x - l, node.y + h);
    branch(h, l, node.childDown);
  }

  node.isLeaf = node.childUp || node.childDown ? false : true;
  if(node.isLeaf) {
    leaves.push(node);
  }
}

function drawFork(x, y, d, h, l) {
  line(x, y, x - l, y); // horizonal
  line(x - l, y, x - l, y - h); // vertical up
  line(x - l, y, x - l, y + h); // vertical up
}

function drawLeaves() {
  for(var i = 0; i < leaves.length; i++) {
    leaves[i].drawNode();
  }
  if (d < dMax) { d++; }
}

function normalizeLeaves() {
  for(var i = 0; i < leaves.length; i++) {
    var rootX = width - 30;
    var rootY = height / 2;
    leaves[i].x += rootX;
    leaves[i].y += rootY;
  }
}

function physics() {
  for(var i = 0; i < leaves.length; i++) {
    if(leaves[i].hasGravity) {
      leaves[i].y++;
    }
  }
}