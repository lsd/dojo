var primeFactors = function(n) {
  var factors = [];

  for (var possibleFactor = 2; possibleFactor < n; possibleFactor++) {
    while (n % possibleFactor === 0) {
      factors.push(possibleFactor);
      n /= possibleFactor;
    }
  }

  if (n > 1) {
    factors.push(n);
  }

  return factors;
};

describe("primeFactors", function() {
  describe("with 1", function() {
    it("returns expected values", function() {
      expect(primeFactors(1) instanceof Array).toBe(true);
      expect(primeFactors(1)).toEqual([]);
    });
  });

  describe("with 2", function() {
    it("returns expected values", function() {
      expect(primeFactors(2)).toEqual([2]);
    });
  });

  describe("with 3", function() {
    it("returns expected values", function() {
      expect(primeFactors(3)).toEqual([3]);
    });
  });

  describe("with 4", function() {
    it("returns expected values", function() {
      expect(primeFactors(4)).toEqual([2, 2]);
    });
  });

  describe("with 6", function() {
    it("returns expected values", function() {
      expect(primeFactors(6)).toEqual([2, 3]);
    });
  });

  describe("with 8", function() {
    it("returns expected values", function() {
      expect(primeFactors(8)).toEqual([2, 2, 2]);
    });
  });

  describe("with 9", function() {
    it("returns expected values", function() {
      expect(primeFactors(9)).toEqual([3, 3]);
    });
  });

  describe("with a bunch of factors", function() {
    it("returns expected values", function() {

      expect(primeFactors(2 * 2 * 3 * 5 * 5 * 13 * 13 * 17)).toEqual([
        2, 2, 3, 5, 5, 13, 13, 17
      ]);
    });
  });
});
