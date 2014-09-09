"use strict";

var Universe = function(length, width) {
  this.length = length;
  this.width = width;
};

Universe.prototype.area = function() {
  return this.length * this.width;
}

Universe.prototype.cells = function() {
  return [];
}

describe("Game of Life Universe", function() {
  var universe = null;

  beforeEach(function() {
    universe = new Universe(10, 10);
  });

  it("should be 2 dimensional", function() {
    expect(universe.area()).toBe(100);
  });

  it("should start off with no cells", function() {
    expect(universe.cells.length).toBe(0);
  });
});
