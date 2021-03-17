import { newArray } from "./App/newArray";
import drawCanvas from "./App/drawCanvas";
import bubbleSort from "./scripts/bubbleSort";
import _quickSort from "./scripts/quickSort";
import "./style.css";
import _mergeSort from "./scripts/mergeSort";
const canvas = document.getElementById("my-canvas");
const selected = document.getElementById("method");
const reset = document.getElementById("reset");
const start = document.getElementById("start");
// bubbleSort(array, state, canvas);
// _mergeSort(array, state, canvas);
// _quickSort(array, state, canvas);

function Init() {
  let { array, state } = newArray(canvas.width, canvas.height);
  drawCanvas(canvas, array);
  start.addEventListener("click", () => {
    let sortingMethod = selected.value;
    if (sortingMethod === "m") _mergeSort(array, state, canvas);
    else if (sortingMethod == "q") _quickSort(array, state, canvas);
    else bubbleSort(array, state, canvas);
  });
  reset.addEventListener("click", () => {
    window.location.reload();
  });
}
Init();
