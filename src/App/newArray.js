export const newArray = (width, height) => {
  let array = [];
  let state = [];
  for (let i = 0; i < width; i = i + 10) {
    let value = Math.floor(Math.random(height) * height);
    array.push(value);
    state.push(-1);
  }
  return { array, state };
};
