export default function disableOthers(start, selected) {
  start.disabled = true;
  selected.disabled = true;
}
export function enableOthers(start, selected) {
  start.disabled = false;
  selected.disabled = false;
}
