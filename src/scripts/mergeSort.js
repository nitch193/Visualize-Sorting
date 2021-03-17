import sleep from "../App/sleep";
import drawWhileSorting from "../App/drawWhileSorting";

export default async function _mergeSort(array, state, canvas) {
  let start = 0;
  let end = array.length - 1;
  if (start >= end) return;
  await mergeSort(array, state, canvas, start, end);
}

async function mergeSort(array, state, canvas, start, end) {
  if (start >= end) return;
  let mid = parseInt((start + end) * 0.5);
  await mergeSort(array, state, canvas, start, mid);
  await sleep(50);
  await mergeSort(array, state, canvas, mid + 1, end);
  await sleep(50);
  await Merge(array, state, start, end, mid);
  await sleep(50);
  await drawWhileSorting(array, state, canvas);
}

async function Merge(array, state, start, end, mid) {
  let i = start,
    j = mid + 1,
    k = start;
  let temp = [];
  while (i <= mid && j <= end) {
    if (array[i] > array[j]) {
      temp[k++] = array[j++];
    } else temp[k++] = array[i++];
  }
  while (i <= mid) {
    temp[k++] = array[i++];
  }
  while (j <= end) {
    temp[k++] = array[j++];
  }
  k = start;
  while (k <= end) {
    state[k] = 1;
    array[k] = temp[k++];
  }
}
