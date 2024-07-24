export default function appendToEachArrayValue(array, appendString) {
  const resultArr = [];
  for (const value of array) {
    resultArr.push(appendString + value);
  }
  return resultArr;
}
