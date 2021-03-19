import sleep from "../App/sleep";
import drawWhileSorting from "../App/drawWhileSorting";

export default async function insertionSort(array, state, canvas) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let idx = i - 1;
    state[i] = 1;
    while (idx >= 0 && array[idx] > key) {
      array[idx + 1] = array[idx];
      state[idx] = 0;
      idx--;
      await sleep(50);
      await drawWhileSorting(array, state, canvas);
    }
    array[idx + 1] = key;
    state[idx] = 0;
    state[i] = 1;
    await sleep(50);
    await drawWhileSorting(array, state, canvas);
  }
}
