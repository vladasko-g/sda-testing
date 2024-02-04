import { isArray } from "./isArray";

const testCases = [
  {
    desc: "empty array is an array",
    input: [],
    expected: true,
  },
  {
    desc: "empty object is not an array",
    input: {},
    expected: false,
  },
  {
    desc: "null is not an array",
    input: null,
    expected: false,
  },
  {
    desc: "function is not an array",
    input: function () {
      return [];
    },
    expected: false,
  },
  {
    desc: "array with random data is an array",
    input: [[[]], undefined, 1, 2, 3],
    expected: true,
  },
];

describe("isArray", () => {
  test.each(testCases)("$desc", ({ input, expected }) => {
    expect(isArray(input)).toBe(expected);
  });
});
