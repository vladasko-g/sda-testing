import { swapArrayIndexes } from "./swapArrayIndexes";
import * as isValidIndexModule from "./isValidIndex";

describe("swapArrayIndexes", () => {
  const testCases = [
    {
      desc: "should swap first and second index values",
      arr: [0, 5, 6, 8],
      i: 0,
      j: 1,
      expected: [5, 0, 6, 8],
    },
    {
      desc: "should swap second and fourth index values",
      arr: [0, 5, null, 6, 8],
      i: 2,
      j: 4,
      expected: [0, 5, 8, 6, null],
    },
  ];

  const originalIsValidIndex = isValidIndexModule.isValidIndex;

  beforeAll(() => {
    isValidIndexModule.isValidIndex = jest.fn((i, max) => true);
  });

  beforeEach(() => {
    isValidIndexModule.isValidIndex.mockClear();
  });

  test.each(testCases)("$desc", ({ i, j, arr, expected }) => {
    expect(swapArrayIndexes(arr, i, j)).toEqual(expected);
    expect(isValidIndexModule.isValidIndex).toBeCalledTimes(2);
  });

  afterAll(() => {
    isValidIndexModule.isValidIndex = originalIsValidIndex; // mockRestore  only work with spyOn, so we need manual restore
  });
});
