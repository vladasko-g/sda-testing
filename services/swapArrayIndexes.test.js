import { swapArrayIndexes } from "./swapArrayIndexes";

import * as isValidIndexModule from "./isValidIndex";

describe("swapArrayIndexes", () => {
  const testCases = [
    {
      desc: "should swap array index values 1",
      inputArray: [0, 1, 2, 3, 4],
      i: 0,
      j: 3,
      expected: [3, 1, 2, 0, 4],
    },
    {
      desc: "should swap array index values 2",
      inputArray: [0, null, 2, "3", []],
      i: 1,
      j: 4,
      expected: [0, [], 2, "3", null],
    },
  ];

  let spy = null;

  beforeAll(() => {
    spy = jest.spyOn(isValidIndexModule, "isValidIndex");

    spy.mockImplementation(() => true);
  });

  beforeEach(() => {
    spy.mockClear();
  });

  afterAll(() => {
    spy.mockRestore();
  });

  testCases.forEach(({ desc, inputArray, i, j, expected }) => {
    test(desc, () => {
      expect(swapArrayIndexes(inputArray, i, j)).toEqual(expected);

      expect(spy).toBeCalledTimes(2);

      const maxIndex = inputArray.length - 1;
      expect(spy.mock.calls[0]).toEqual([i, maxIndex]);
      expect(spy.mock.calls[1]).toEqual([j, maxIndex]);
    });
  });

  test("should not swap invalid index values 1", () => {
    spy.mockImplementation(() => false);

    expect(swapArrayIndexes([0, null, 2, "3", []], -1, 4)).toEqual([
      0,
      null,
      2,
      "3",
      [],
    ]);

    expect(isValidIndexModule.isValidIndex).toBeCalledTimes(2);
  });
});
