str = "momo"

obj = {
  name : "bobby",
  gender: "male",
  age : 23
}

num = 12344


student1 = {
  name : "John",
  age : 3,
  mood : "geeked",
  awake : false,
  weight : 10
}












function stringToArray(string) {
  //for (initialization; condition; increment) {
  for (var array = [], index = 0; index < string.length; index = index + 1) {
    item = string[index]
    array[index] = item
  }

  return array
}
