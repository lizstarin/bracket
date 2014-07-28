function mousePressed() {
  leaves.forEach(function(leaf) {
    var r = d / 2
    if (mouseX < leaf.x + r && mouseX > leaf.x - r && mouseY < leaf.y + r && mouseY > leaf.y - r) {
      leaf.drop();
    }
  })
}