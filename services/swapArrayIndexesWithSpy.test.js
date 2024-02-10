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

  let spy = null;

  beforeAll(() => {
    spy = jest.spyOn(isValidIndexModule, "isValidIndex");
    spy.mockImplementation(() => true);
  });

  beforeEach(() => {
    isValidIndexModule.isValidIndex.mockClear();
  });

  test.each(testCases)("$desc", ({ i, j, arr, expected }) => {
    expect(swapArrayIndexes(arr, i, j)).toEqual(expected);
    expect(spy).toBeCalledTimes(2);
  });

  afterAll(() => {
    spy.mockRestore();
  });
});
