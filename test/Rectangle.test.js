const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
  it("check if two sides are of same length", () => {
    const rectangle = new Rectangle(10, 10);
    assert.strictEqual(rectangle.isSquare(), true);
  });

  it("check if two sides are of different length", () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.isSquare(), false);
  });

  it("check area", () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.getArea(), 50);
  });

  it("check perimeter", () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.getPerimeter(), 30);
  });
});
