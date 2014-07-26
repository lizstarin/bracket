function Node(x, y) {
  this.x = x;
  this.y = y;

  this.R = 255;
  this.G = 0;
  this.B = 0;

  this.drawNode = function() {
    fill(this.R, this.G, this.B);
    ellipse(this.x, this.y, d, d);
  }

  this.changeColor = function() {
    this.R = random(255);
    this.G = random(255);
    this.B = random(255);
  }
}