import { selectionSort } from "./selectionSort";

describe("selectionSort", () => {
  const testCases = [
    {
      desc: "should sort array of numbers",
      arr: [5, 6, 1, 8, 0],
      expected: [0, 1, 5, 6, 8],
    },
  ];

  test.each(testCases)("$desc", ({ arr, expected }) => {
    expect(selectionSort(arr)).toEqual(expected);
  });
});
