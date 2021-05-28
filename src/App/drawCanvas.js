export default function drawCanvas(canvas, array) {
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "#e0622f";
  let xStart = 0;
  for (let i = 0; i < array.length; i++) {
    ctx.fillRect(xStart, canvas.height - array[i], 10, array[i]);
    ctx.strokeRect(xStart, canvas.height - array[i], 10, array[i]);
    xStart += 10;
  }
}
