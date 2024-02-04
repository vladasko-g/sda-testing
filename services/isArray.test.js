import { isArray } from "./isArray";

const testCases = [
  {
    desc: "empty array",
    input: [],
    expected: true,
  },
  {
    desc: "empty object",
    input: {},
    expected: false,
  },
  {
    desc: "null",
    input: null,
    expected: false,
  },
  {
    desc: "function",
    input: function () {
      return [];
    },
    expected: false,
  },
  {
    desc: "array with random data",
    input: [[[]], undefined, 1, 2, 3],
    expected: true,
  },
];

describe("isArray", () => {
  test.each(testCases)("$desc", ({ input, expected }) => {
    expect(isArray(input)).toBe(expected);
  });
});
