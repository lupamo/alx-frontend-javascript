export default function updateUniqueItems(mapper) {
  if (!(mapper instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of mapper) {
    if (value === 1) {
      mapper.set(key, 100);
    }
  }
  return mapper;
}
