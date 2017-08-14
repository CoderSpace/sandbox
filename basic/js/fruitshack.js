
var fruitshack = new Store("FruitShack")
var cherry = new Item(4044, "cherry", 4.56)
var strawberry = new Item(2022, "strawberry", 4.00)
var banana = new Item(3033, "banana", 4.11)

fruitshack.addItem(cherry)
fruitshack.addItem(strawberry)
fruitshack.addItem(banana)



var array = [40, 50, 60, 70]
var match = 70


function findIndexOf(array, match) {
  var result
  var index = 0
  var count = array.length

  while (index < count) {
    element = array[index]
    if (element === match) { result = index }
    index = index + 1
  }

  return result
}

















// good = {
//   name : "strawberry",
//   costPerPound : 5.0,
//   plu : 3087
// }
//
// customer1 = {
//   name : "Maurice",
//   address: "333 South Wayne St, New Sausageville, NY 02003",
//   paymentMethod : "visa"
// }
//
// customer2 = {
//   name : "Eden",
//   address: "222 South Wayne St, New Sausageville, NY 02003",
//   paymentMethod : "paypal"
// }
//
//
//
// customer3 = new Customer("Bill", "123 S State St, Chicago IL, 60605", "AMEX")
