
export function getMergeSortAnimations(array) {
  const animations = []
	if(array.length <= 1) return array;
	const auxArray = array.slice();
	mergeSortHelper(array, 0, array.length-1, auxArray, animations);
	return animations
}

function mergeSortHelper(arr , start, end , aux, animations){
	if(start === end ) return;
	const middleIdx = Math.floor((start + end)/2);
	mergeSortHelper(aux, start, middleIdx, arr, animations);
	mergeSortHelper(aux, middleIdx+1, end, arr, animations);
	doMerge(arr, start, middleIdx, end, aux, animations);

}
function doMerge(arr, start, middle, end, aux, animations){
	let k = start;
	let i = start;
	let j = middle +1 ;
	while(i <= middle && j <= end){
    animations.push([i,j])
    animations.push([i,j])
		if(aux[i] <= aux[j]){
      animations.push([k, aux[i]]);
			arr[k++] = aux[i++];
		}else {
      animations.push([k, aux[j]]);
			arr[k++] = aux[j++];
		}
	}
	while(i <= middle ){
    animations.push([i,i]);
    animations.push([i,i]);
    animations.push([k, aux[i]]);
		arr[k++] = aux[i++];
	}
	while(j <= end){
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, aux[j]]);
		arr[k++] = aux[j++]
	}
}
