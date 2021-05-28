import { newArray } from "./App/newArray";
import drawCanvas from "./App/drawCanvas";
import bubbleSort from "./scripts/bubbleSort";
import _quickSort from "./scripts/quickSort";
import selectionSort from "./scripts/selectionSort";
import insertionSort from "./scripts/insertionSort";
import disableOthers, { enableOthers } from "./App/disableAndEnable";
import "./style.css";
import _mergeSort from "./scripts/mergeSort";
const canvas = document.getElementById("my-canvas");
const selected = document.getElementById("method");
const reset = document.getElementById("reset");
const start = document.getElementById("start");

function Init() {
  let { array, state } = newArray(canvas.width, canvas.height);
  drawCanvas(canvas, array);
  start.addEventListener("click", async () => {
    let sortingMethod = selected.value;
    if (sortingMethod === "m") {
      disableOthers(start, selected);
      await _mergeSort(array, state, canvas);
      enableOthers(start, selected);
    } else if (sortingMethod === "q") {
      disableOthers(start, selected);
      await _quickSort(array, state, canvas);
      enableOthers(start, selected);
    } else if (sortingMethod === "b") {
      disableOthers(start, selected);
      await bubbleSort(array, state, canvas);
      enableOthers(start, selected);
    } else if (sortingMethod === "i") {
      disableOthers(start, selected);
      await insertionSort(array, state, canvas);
      enableOthers(start, selected);
    } else {
      disableOthers(start, selected);
      await selectionSort(array, state, canvas);
      enableOthers(start, selected);
    }
  });
  reset.addEventListener("click", () => {
    window.location.reload();
  });
}
Init();
