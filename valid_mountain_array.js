var validMountainArray = function(arr) {
    
    if (arr.length < 3) return false;
    let left = 0;
    let right = arr.length - 1;

    // Walk up
    while (left + 1 < arr.length && arr[left] < arr[left + 1]) {
        left++;
    }

    // Peak can't be first or last element
    if (left === 0 || left === arr.length - 1) return false;

    // Walk down
    while (right > left && arr[right] < arr[right - 1]) {
        right--;
    }

    return left === right;
};



console.log(validMountainArray([3,5,5]))