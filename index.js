function reverseString(string){
  var newArray = []
  var array = string.split("")
  for(var i=array.length; i>=0; i--){
    newArray.push(array[i])
  }
  return newArray.join("")
}

reverseString("string string string")

module.exports = {
  reverseString
}
