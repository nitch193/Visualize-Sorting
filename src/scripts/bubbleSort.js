export default function bubbleSort(array, states) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        let t = array[j];
        array[j] = array[i];
        array[i] = t;
      }
    }
  }
}
