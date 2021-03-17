import drawWhileSorting from "../App/drawWhileSorting";
import sleep from "../App/sleep";

export default async function _quickSort(array, state, canvas) {
  let start = 0,
    end = array.length - 1;
  await quickSort(array, state, start, end, canvas);
  await drawWhileSorting(array, state, canvas);
}

async function quickSort(array, state, start, end, canvas) {
  if (start >= end) return;
  let partitionIndex = await partition(array, state, start, end, canvas);
  await quickSort(array, state, start, partitionIndex - 1, canvas);
  await quickSort(array, state, partitionIndex + 1, end, canvas);
}

async function partition(array, state, start, end, canvas) {
  let pivot = array[end],
    pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (array[i] <= pivot) {
      let t = array[i];
      array[i] = array[pivotIndex];
      array[pivotIndex] = t;
      pivotIndex++;
      state[i] = 1;
      state[pivotIndex] = 1;
      await sleep(50);
      await drawWhileSorting(array, state, canvas);
    }
  }
  let t = array[end];
  array[end] = array[pivotIndex];
  array[pivotIndex] = t;
  await sleep(50);
  await drawWhileSorting(array, state, canvas);
  return pivotIndex;
}
