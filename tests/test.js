'use strict'

var chai = require('chai');
var expect = chai.expect;
var myApp = require('../app/library.js');

describe("Test to get Prime numbers ", function() {

  it("should return [] for 1", function() {
    expect(myApp.getPrimes([1])).to.eql([]);
  });

  it("should return [2] for  2", function() {
    expect(myApp.getPrimes(2)).to.eql([2]);
  });

  it("should return [2,5,7] for 7", function() {
    expect(myApp.getPrimes(7)).to.eql([2,3,5,7]);
  });

  it("should return [] for  1", function() {
    expect(myApp.getPrimes(1)).to.eql([]);
  });

  it("should return [2, 3, 5, 7, 11, 13, 17] for  17", function() {
      expect(myApp.getPrimes(17)).to.eql([2, 3, 5, 7, 11, 13, 17]);
  });
  
})