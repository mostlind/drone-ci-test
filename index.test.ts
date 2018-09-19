import { Box, compose, add, double } from ".";

describe("Box", () => {
  it("should be a container", () => {
    expect(Box.of(3).value()).toBe(3);
  });

  it("should apply functions to the contained value", () => {
    expect(
      Box.of(3)
        .map(x => x + 3)
        .value()
    ).toBe(6);
  });

  it("should be able to flatten containers", () => {
    expect(
      Box.of(3)
        .flatMap(x => Box.of(x + 3))
        .value()
    ).toBe(6);
  });
});

describe("compose", () => {
  it("should compose functions", () => {
    const add1 = (x: number) => x + 1;
    const addHello = (x: number | string) => x + "hello";

    expect(
      compose(
        addHello,
        add1
      )(2)
    ).toBe("3hello");
  });
});

describe("add", () => {
  it("should be a curried add", () => {
    expect(add(2)(3)).toBe(5);
  });
});

describe("double", () => {
  it("should double", () => {
    expect(double(1)).toBe(2);
  });
});
