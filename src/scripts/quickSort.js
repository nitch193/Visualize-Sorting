export default function _quickSort(array, state) {
  let start = 0,
    end = array.length - 1;
  quickSort(array, state, start, end);
}

function quickSort(array, state, start, end) {
  if (start >= end) return;
  let partitionIndex = partition(array, state, start, end);
  quickSort(array, state, start, partitionIndex - 1);
  quickSort(array, state, partitionIndex + 1, end);
}

function partition(array, state, start, end) {
  let pivot = array[end],
    pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (array[i] <= pivot) {
      let t = array[i];
      array[i] = array[pivotIndex];
      array[pivotIndex] = t;
      pivotIndex++;
    }
  }
  let t = array[end];
  array[end] = array[pivotIndex];
  array[pivotIndex] = t;
  return pivotIndex;
}
