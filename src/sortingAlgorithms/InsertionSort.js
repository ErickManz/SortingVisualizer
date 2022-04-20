export function getInsertionSortAnimations(array){
  let animations = [];
  let auxiliaryArray = array.slice();
  insertionSort(auxiliaryArray, animations);
  array = auxiliaryArray;
  return [animations, array];
}

function insertionSort(auxiliaryArray , animations){

  for(let i=1; i < auxiliaryArray.length; i++){
    let value = auxiliaryArray[i];
    let j = i - 1;
    animations.push(["comparision1", j, i]);
    animations.push(["comparision2", j, i]);

    while(j >= 0 && auxiliaryArray[j] > value){
        animations.push(["swap", j+1, auxiliaryArray[j]]);
        auxiliaryArray[j+1]= auxiliaryArray[j];
        j -= 1;
        if(j >= 0){
          animations.push(["comparision1", j, i]);
          animations.push(["comparision2", j, i]);
        }
    }

        animations.push(["swap", j + 1, value]);
        auxiliaryArray[j + 1] = value;
  }
}
