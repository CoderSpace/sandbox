class Item {
  constructor(plu, name, price) {
    this.name = name;
    this.plu = plu;
    this.price = price;
  }

  print() {
    return this.name + ":" + this.plu + ":" + this.price
  }
}
