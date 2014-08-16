function Node(x, y) {
  this.x = x;
  this.y = y;

  this.R = 255;
  this.G = 0;
  this.B = 0;

  this.hasGravity = false;

  this.drawNode = function() {
    fill(this.R, this.G, this.B);
    ellipse(this.x, this.y, d, d);
  }

  this.changeColor = function() {
    this.R = random(255);
    this.G = random(255);
    this.B = random(255);
    this.drawNode();
  }

  this.drop = function() {
    this.hasGravity = true;
  }

  this.isLeaf = function() {
    return this.childUp || this.childDown ? false : true;
  }
}