import { selectionSort } from "./selectionSort";

describe("selectionSort", () => {
  const testCases = [
    {
      desc: "1",
      arr: [5, 6, 1, 8, 0],
      expected: [0, 1, 5, 6, 8],
    },
  ];

  testCases.forEach(({ desc, arr, expected }) => {
    test(desc, () => {
      expect(selectionSort(arr)).toEqual(expected);
    });
  });
});
