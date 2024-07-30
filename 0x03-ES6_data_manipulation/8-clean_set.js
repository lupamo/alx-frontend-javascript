export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const matchVal = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      matchVal.push(value.slice(startString.length));
    }
  }
  return matchVal.join('-');
}
