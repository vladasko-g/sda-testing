import { isValidIndex } from "./isValidIndex";

describe("isValidIndex", () => {
  const testCases = [
    {
      desc: "index should be integer",
      index: 0.1,
      max: 5,
      expected: false,
    },
    {
      desc: "index should be number",
      index: "2",
      max: 5,
      expected: false,
    },
    {
      desc: "index should be lower or equal than max",
      index: 5,
      max: 5,
      expected: true,
    },
    {
      desc: "index should be lower or equal than max 2",
      index: 6,
      max: 5,
      expected: false,
    },
    {
      desc: "should return true if valid",
      index: 2,
      max: 5,
      expected: true,
    },
  ];

  test.each(testCases)("$desc", ({ index, max, expected }) => {
    expect(isValidIndex(index, max)).toEqual(expected);
  });
});
