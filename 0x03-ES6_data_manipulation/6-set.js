export default function setFromArray(arr) {
  const setter = new Set();
  for (let i = 0; i < arr.length; i += 1) {
    setter.add(arr[i]);
  }
  return setter;
}
