function cloneArray(array) {
  return [...array]
}

const originalArray = [1, 2, 3, 4, 5]
const clonedArray = cloneArray(originalArray)

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(clonedArray); // [1, 2, 3, 4, 5]
