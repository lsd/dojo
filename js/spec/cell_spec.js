function Cell() {

}

describe("cell life cycle", function() {

    beforeEach(function() {
    });

    it("should be born at a specific place in the universe", function() {
    });

    describe("living cell", function() {
      it("should die if it has fewer than two live neighbors", function() {
        cell = {dead: true}
        expect(cell.dead).toBe(true);
      });

      it("should live on if it has 2-3 live neighbors", function() {

      });

      it("should die if has > 3 live neighbors", function() {

      });
    });

    describe("dead cell", function() {
      it("should become alive if it has 3 live neighbours", function() {

      });
    });
})
