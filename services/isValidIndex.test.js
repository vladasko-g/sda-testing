import { isValidIndex } from "./isValidIndex";

describe.skip("isValidIndex", () => {
  const testCases = [
    {
      desc: "should be valid",
      index: 5,
      max: 5,
      expected: true,
    },
    {
      desc: "should dissallow not integer indexes",
      index: 4.1,
      max: 5,
      expected: false,
    },
    {
      desc: "should allow numbers only",
      index: "5",
      max: 5,
      expected: false,
    },
    {
      desc: "should disallow over max",
      index: 5,
      max: 4,
      expected: false,
    },
    {
      desc: "should disallow negative numbers",
      index: -5,
      max: 4,
      expected: false,
    },
    {
      desc: "should allow 0 ",
      index: 0,
      max: 4,
      expected: true,
    },
  ];

  testCases.forEach(({ desc, index, max, expected }) => {
    test(desc, () => {
      expect(isValidIndex(index, max)).toEqual(expected);
    });
  });
});
