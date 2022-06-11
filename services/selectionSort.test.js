import { selectionSort } from "./selectionSort";

describe("selectionSort", () => {
  test("should sort unsorted array", () => {
    const unsortedArray = [1, -11, 0, -11, 12, 9000, 0, 0, 1, 2, 4];
    const expected = [-11, -11, 0, 0, 0, 1, 1, 2, 4, 12, 9000];

    const result = selectionSort(unsortedArray);

    expect(result).toEqual(expected);
  });

  test("should return an empty array", () => {
    const unsortedArray = [];
    const expected = [];

    const result = selectionSort(unsortedArray);

    expect(result).toEqual(expected);
  });
});
