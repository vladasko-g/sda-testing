import { isValidIndex } from "./is-valid-index";

export const swapArrayIndexes = (arr, i, j) => {
  const result = [...arr];

  const highestIndex = arr.length - 1;

  const isValidI = isValidIndex(i, highestIndex);
  const isValidJ = isValidIndex(j, highestIndex);

  if (!isValidI || !isValidJ) return result;

  const temp = result[i];
  result[i] = result[j];
  result[j] = temp;

  return result;
};
