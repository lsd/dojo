var isLeapYear = function(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

describe("isLeapYear", function() {
  it("returns false for non-leap year", function() {
    expect(isLeapYear(1994)).toBe(false);
  });

  it("returns true for typical leap year", function() {
    expect(isLeapYear(1996)).toBe(true);
  });

  it("returns false for typical div-by-100 year", function() {
    expect(isLeapYear(1900)).toBe(false);
  });

  it("returns true for div-by-400 year", function() {
    expect(isLeapYear(2000)).toBe(true);
  });
});
