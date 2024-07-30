export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const addOne = weakMap.get(endpoint);
    weakMap.set(endpoint, addOne + 1);
  }
  const addedOne = weakMap.get(endpoint);

  if (addedOne >= 5) {
    throw new Error('Endpoint load is high');
  }
}
