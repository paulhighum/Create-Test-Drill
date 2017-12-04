const assert = require("assert")
const index = require("../index.js")

const string = "paul is the best at everything"


describe("Index", function(){
  describe("#reverseString", function(){
    it("reverses a string", function(){
      assert.equal(index.reverseString(string), "gnihtyreve ta tseb eht si luap")
    })
  })
})
