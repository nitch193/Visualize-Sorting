export default async function drawWhileSorting(array, states, canvas) {
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < array.length; i++) {
    ctx.fillStyle = "pink";
    ctx.strokeRect(i * 10, canvas.height - array[i], 10, array[i]);
    ctx.fillRect(i * 10, canvas.height - array[i], 10, array[i]);
    if (states[i] === 1) {
      ctx.fillStyle = "#46fa37";
      ctx.strokeRect(i * 10, canvas.height - array[i], 10, array[i]);
      ctx.fillRect(i * 10, canvas.height - array[i], 10, array[i]);
      states[i] = -1;
    }
    if (states[i] === 0) {
      ctx.fillStyle = "#ff2f";
      ctx.strokeRect(i * 10, canvas.height - array[i], 10, array[i]);
      ctx.fillRect(i * 10, canvas.height - array[i], 10, array[i]);
      states[i] = -1;
    }
  }
}
