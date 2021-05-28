export default async function drawWhileSorting(array, states, canvas) {
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < array.length; i++) {
    ctx.fillStyle = "#e0622f";
    ctx.strokeRect(i * 10, canvas.height - array[i], 10, array[i]);
    ctx.fillRect(i * 10, canvas.height - array[i], 10, array[i]);
    ctx.strokeStyle = "black";
    if (states[i] === 1) {
      ctx.fillStyle = "#469";
      ctx.strokeStyle = "black";
      ctx.strokeRect(i * 10, canvas.height - array[i], 10, array[i]);
      ctx.fillRect(i * 10, canvas.height - array[i], 10, array[i]);
      states[i] = -1;
    }
    if (states[i] === 0) {
      ctx.strokeStyle = "black";
      ctx.fillStyle = "#f3f4ed";
      ctx.strokeRect(i * 10, canvas.heigh7t - array[i], 10, array[i]);
      ctx.fillRect(i * 10, canvas.height - array[i], 10, array[i]);
      states[i] = -1;
    }
  }
}
