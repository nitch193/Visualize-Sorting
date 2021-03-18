// import drawCanvas from "../App/drawCanvas";
import drawWhileSorting from "../App/drawWhileSorting";
import sleep from "../App/sleep";

export default async function bubbleSort(array, state, canvas) {
  await _bubbleSort(array, state, canvas);
}

async function _bubbleSort(array, state, canvas) {
  for (let i = 0; i < array.length; i++) {
    state[i] = 1;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let t = array[j];
        array[j] = array[j + 1];
        array[j + 1] = t;
        state[j] = 0;
        await sleep(50);
        await drawWhileSorting(array, state, canvas);
      }
      state[j] = 1;
      await sleep(50);
      await drawWhileSorting(array, state, canvas);
    }
  }
}
