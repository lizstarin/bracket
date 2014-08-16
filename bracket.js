function Bracket(x, y) {
  this.x = x;
  this.y = y;
  this.root = new Node(x, y)

  this.drawBracket = function() {
    branch(h, l, this.root);
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
  }

  function drawFork(x, y, d, h, l) {
    line(x, y, x - l, y); // horizonal
    line(x - l, y, x - l, y - h); // vertical up
    line(x - l, y, x - l, y + h); // vertical down
  }
}
