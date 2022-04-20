
export function getbubbleSortAnimations(array) {
  let animations = [];
  let auxiliaryArray = array.slice();
  bubbleSort(auxiliaryArray, animations);
  array = auxiliaryArray;
  return [animations, array];
}

function bubbleSort(auxiliaryArray, animations) {
  const n = auxiliaryArray.length;
  let isSorted=false;
  let count = 0;
  while(!isSorted) {
    isSorted =true
    for (let j = 0; j < n - 1- count; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
        animations.push([j, auxiliaryArray[j + 1]]);
        animations.push([j + 1, auxiliaryArray[j]]);
        swap(auxiliaryArray, j, j + 1);
        isSorted = false
      } else {
        animations.push([-1, -1]);
        animations.push([-1, -1]);
      }
    }
    count++;
  }
}

function swap(auxiliaryArray, firstIndex, secondIndex) {
  let temp = auxiliaryArray[firstIndex];
  auxiliaryArray[firstIndex] = auxiliaryArray[secondIndex];
  auxiliaryArray[secondIndex] = temp;
}


