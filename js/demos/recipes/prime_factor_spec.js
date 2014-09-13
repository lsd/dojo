function primeFactors(n) {
  var factors = [];

  for (var div = 2; n > 1; ++div) {
    for (; n % div === 0; n /= div) {
      factors.push(div);
    }
  }

  return factors;
}

describe('prime factor', function() {
  describe("of 1", function() {
    it("returns empty", function() {
      expect(primeFactors(1)).toEqual([]);
    });
  });

  describe("of 2", function() {
    it("returns 2", function() {
      expect(primeFactors(2)).toEqual([2]);
    });
  });

  describe("of 3", function() {
    it("returns 3", function() {
      expect(primeFactors(3)).toEqual([3]);
    });
  });

  describe("of 4", function() {
    it("returns 2, 2", function() {
      expect(primeFactors(4)).toEqual([2, 2]);
    });
  });

  describe("of 5", function() {
    it("returns 5", function() {
      expect(primeFactors(5)).toEqual([5]);
    });
  });

  describe("of 9", function() {
    it("returns 3, 3", function() {
      expect(primeFactors(9)).toEqual([3, 3]);
    });
  });

});
