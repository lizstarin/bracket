function Bracket(x, y) {
  this.x = x;
  this.y = y;
  this.root = new Node(x, y)

  this.drawBracket = function() {
    branch(h, l, this.root);
  }

  this.drawLeaves = function() {
    leaves.forEach(function(leaf) {
      leaf.drawNode();
    })
    if (d < dMax) { d++; }
  }

  this.physics = function() {
    for(var i = 0; i < leaves.length; i++) {
      if(leaves[i].hasGravity) {
        leaves[i].y++;
      }
    }
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
}
