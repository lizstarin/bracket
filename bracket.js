var h, hMax, hSpeed, l, lMax, lSpeed, d, nodes, count;

function setup() {
  setVariables();
  createCanvas(600, 600);

  stroke(0);
  strokeWeight(3);
  fill(255, 0, 0);
}

function draw() {
  background(255);

  increment();

  translate(width - 30, height / 2);
  root = new Node(0, 0);
  branch(h, l, root);
}

function setVariables() {
  h = 0;
  hMax = 400;
  hSpeed = 4;

  l = 0;
  lMax = 100;
  lSpeed = 1;

  d = 20;
  nodes = [];
  count = 0;
}

function increment() {
  if (h < hMax) { h+= hSpeed; }
  if (l < lMax) { l+= lSpeed; }
}

function branch(h, l, node) {
  h *= .4;

  if (h > 20) {
    drawFork(node.x, node.y, d, h, l);

    node.childUp = new Node(node.x - l, node.y - h);
    branch(h, l, node.childUp);

    node.childDown = new Node(node.x - l, node.y + h);
    branch(h, l, node.childDown);
  }


  node.isLeaf = node.childUp || node.childDown ? false : true;
  if(node.isLeaf) {
    nodes.push(node);
    count++;
  }
}

function drawFork(x, y, d, h, l) {
  line(x, y, x - l, y); // horizonal
  line(x - l, y, x - l, y - h); // vertical up
  line(x - l, y, x - l, y + h); // vertical up
}