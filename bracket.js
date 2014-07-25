function setup() {
  createCanvas(600, 600);

  stroke(0);
  strokeWeight(3);
  fill(255, 0, 0);
}

var h = 0;
var l = 0;
var d = 0;
var hMax = 400;
var lMax = 100;
var dMax = 20;
var hSpeed = 4;
var lSpeed = 1;
var dSpeed = 1;

var count = 0;
var sum = hMax / hSpeed + lMax / lSpeed + dMax / dSpeed;
var teams = ["A", "B", "C", "D", "E", "F", "G", "H"];

function draw() {
  background(255);

  increment();

  translate(width - 30, height / 2);
  root = new Node(0, 0);
  branch(h, l, root);

  if (count == sum) { console.log("done"); }
}

function increment() {
  if (h < hMax) { h+= hSpeed; count++; }
  if (l < lMax) { l+= lSpeed; count++; }
  if (d < dMax) { d+= dSpeed; count++; }
}

function branch(h, l, node) {
  var factor = .4;
  var min = 20;

  h *= factor;

  if (h > min) {
    drawFork(node.x, node.y, d, h, l);

    node.childUp = new Node(node.x - l, node.y - h);
    branch(h, l, node.childUp);

    node.childDown = new Node(node.x - l, node.y + h);
    branch(h, l, node.childDown);
  }

  ellipse(node.x, node.y, d, d);
  node.isLeaf = node.childUp || node.childDown ? false : true;
}

function Node(x, y) {
  this.x = x;
  this.y = y;
}

function drawFork(x, y, d, h, l) {
  line(x, y, x - l, y); // horizonal
  line(x - l, y, x - l, y - h); // vertical up
  line(x - l, y, x - l, y + h); // vertical up
}