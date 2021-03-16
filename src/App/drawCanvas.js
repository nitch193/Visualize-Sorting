export default function drawCanvas(canvas, array) {
  let ctx = canvas.getContext("2d");
  ctx.strokeStyle = "#006fce";
  ctx.fillStyle = "#1f231f";
  let xStart = 0;
  for (let i = 0; i < array.length; i++) {
    ctx.fillRect(xStart, canvas.height - array[i], 20, array[i]);
    ctx.strokeRect(xStart, canvas.height - array[i], 20, array[i]);
    xStart += 20;
  }
}
