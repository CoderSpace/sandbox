var px, py


var id = "momo"

var result = id + " more words"

var array = ["a", "b", "c"]

var item = array[2]


array[3] = "more"

var chair = {
  comfort : "soft",
  legs : 5,
  recline : true,
}

var bed = {
  type : "water",
  size : "queen"
}

bed.size = "king"

////////
//////// This code is for explaining objects
////////

var name = "Uncle Momo is a badass"

// This line sets the characters from the the name
var characters = name.split("")

// var count = 5
// var result = 0
//
// while (count > result) {
//   result = result + 1  //  This also does it -> // result += 1
// }

var result = []
var index = 0

while (index < name.length) {
  item = name[index]
  result[index] = item
  index = index + 1
}

//
// function stringToArray(string) {
//   var array = []
//   var index = 0
//
//   while (index < string.length) {
//     item = string[index]
//     array[index] = item
//     index = index + 1
//   }
//
//   return array
// }


function stringToArray(string) {
  //for (initialization; condition; increment) {
  for (var array = [], index = 0; index < string.length; index = index + 1) {
    item = string[index]
    array[index] = item
  }

  return array
}
