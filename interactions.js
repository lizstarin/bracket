function mousePressed() {
  for (var i = 0; i < leaves.length; i++) {
    var r = d / 2
    if (mouseX < leaves[i].x + r && mouseX > leaves[i].x - r && mouseY < leaves[i].y + r && mouseY > leaves[i].y - r) {
      leaves[i].drop();
    }
  }
}