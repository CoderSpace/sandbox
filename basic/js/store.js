class Store {
  constructor (name) {
    this.name = name
    this.inventory = []
    this.customers = {}
    this.sales = []
  }

  addItem (newItem) {
    this.inventory.push(newItem)
  }

  itemCount () {
    return this.inventory.length
  }

  // Answers the item with that name if it exists, otherwise answers undefined
  searchFor (fruitName) {
    var result
    var item
    var index = 0
    var count = this.inventory.length

    while (index < count) {
      item = this.inventory[index]
      if (item.name === fruitName) {
        return item
      }
      index = index + 1
    }

    return result
  }


  // searchFor (fruitName) {
  //   var result
  //   var item
  //   var index = 0
  //   var count = this.inventory.length
  //   var hasntFoundItem = true
  //
  //   while (hasntFoundItem || index < count) {
  //     item = this.inventory[index]
  //     if (item.name === fruitName) {
  //       result = item
  //       hasntFoundItem = false
  //     }
  //     index = index + 1
  //   }
  //
  //   return result
  // }
}

// answer = fruitshack.searchFor("kiwi")
//
// answer = fruitshack.doYouHave("kiwi")
