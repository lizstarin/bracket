var width, height, rootX, rootY, h, hMax, hSpeed, l, lMax, lSpeed, d, dMax, leaves, leafCoords, bracket, bracketIsFinished, leavesClicked;

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
  leavesClicked = _.filter(leaves, function(leaf) { return leaf.timeClicked > 0; }).length;

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
      var timeSinceClick = Date.now() - leaf.timeClicked;
      console.log(leaf.position);
      if(leaf.x > 0 + dMax + (dMax + 5) * leaf.position) {
        leaf.x = leaf.x - 3;
      } else {
        leaf.x = 0 + dMax + (dMax + 5) * leaf.position;
        leaf.hasGravity = false;
      }
      if(leaf.y < height - dMax / 2 - 3) {
        leaf.y = leaf.y - 6 + timeSinceClick * timeSinceClick * .0001;
      } else {
        leaf.y = height - dMax / 2 - 3;
      }
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