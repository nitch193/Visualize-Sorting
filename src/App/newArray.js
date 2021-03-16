export const newArray = (width, height) => {
  let array = [];
  let states = [];
  for (let i = 0; i < width; i = i + 20) {
    let value = Math.floor(Math.random(height) * height);
    array.push(value);
    states.push(-1);
  }
  return { array, states };
};
