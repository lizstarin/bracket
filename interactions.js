function mousePressed() {
  for (var i = 0; i < nodes.length; i++) {
    var r = d / 2
    if (
      mouseX < nodes[i].x + r && mouseX > nodes[i].x - r &&
      mouseY < nodes[i].y + r && mouseY > nodes[i].y - r) {
      nodes[i].changeColor();
    }
  }
}