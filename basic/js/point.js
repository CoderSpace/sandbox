class Point {
  constructor (coord1, coord2) {
    this.x = coord1
    this.y = coord2
  }

  print() {
    return this.x + ", " + this.y
  }
}

var point1 = new Point(3, 4)
