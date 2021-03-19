import sleep from "../App/sleep";
import drawWhileSorting from "../App/drawWhileSorting";

export default async function selectionSort(array, state, canvas) {
  for (let i = 0; i < array.length; i++) {
    let min_idx = i;
    state[min_idx] = 1;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min_idx]) {
        min_idx = j;
        state[min_idx] = 1;
        await sleep(50);
        await drawWhileSorting(array, state, canvas);
      }
    }
    let t = array[i];
    array[i] = array[min_idx];
    array[min_idx] = t;
    state[i] = 1;
    state[min_idx] = 0;
    await sleep(50);
    await drawWhileSorting(array, state, canvas);
  }
}
