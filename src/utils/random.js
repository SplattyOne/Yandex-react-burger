
const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const getRandomElements = (arr, count) => {
  if (!arr || !arr.length)
    return [];
  return Array.apply(null, Array(count)).map(() => getRandomElement(arr));
}

export { getRandomElement, getRandomElements }
