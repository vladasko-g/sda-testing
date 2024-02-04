import { swapArrayIndexes } from "./swapArrayIndexes";
import * as isValidIndexModule from "./isValidIndex";

describe("swapArrayIndexes", () => {
  const testCases = [
    {
      desc: "1",
      arr: [0, 5, 6, 8],
      i: 0,
      j: 1,
      expected: [5, 0, 6, 8],
    },
    {
      desc: "2",
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

  testCases.forEach(({ desc, i, j, arr, expected }) => {
    test(desc, () => {
      expect(swapArrayIndexes(arr, i, j)).toEqual(expected);
      expect(isValidIndexModule.isValidIndex).toBeCalledTimes(2);
    });
  });

  afterAll(() => {
    spy.mockRestore();
  });
});
