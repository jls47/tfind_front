const quicksort = (array, num) => {
	num += 1;
	let pPoint = Math.floor(Math.random() * array.length);
	let pivot = array[pPoint]
	let left = [];
	let right = [];
	for(let i = 0; i < array.length; i++){
		if(i >= pivot){
			right.push(array[i])
		}else if(i < pivot){
			left.push(array[i])
		}
	}
	if(num > 5){
		return(num);
	}
	let array2 = left.concat(right);
	console.log(array2);
	return num + quicksort(array2, num);

}

quicksort([2, 5, 6, 1, 9, 10, 12, 5, 0, 4, 3, 11, 8], 1)