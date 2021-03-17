// import drawCanvas from "../App/drawCanvas";
import drawWhileSorting from "../App/drawWhileSorting";
import sleep from "../App/sleep";

export default async function bubbleSort(array, state, canvas) {
  // await new Promise((resolve) => setTimeout(resolve, 20));
  for (let i = 0; i < array.length; i++) {
    // await sleep(50);
    // await drawWhileSorting(array, state, canvas);
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] < array[j + 1]) {
        let t = array[j];
        array[j] = array[j + 1];
        array[j + 1] = t;
        state[j] = 1;
        state[j + 1] = 1;
        await sleep(50);
        await drawWhileSorting(array, state, canvas);
        // drawWhileSorting(array, states, canvas);
        // await new Promise((resolve) => setTimeout(resolve, 20));
      }
    }
  }
}
