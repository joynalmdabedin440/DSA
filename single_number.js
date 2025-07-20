var singleNumber = function (nums) {
    
    nums = nums.sort((a, b) => a - b)
    

    
    for (let i = 0; i < nums.length; i=i+2){
        if ((nums[i] ^ nums[i + 1]) !== 0) {
            return nums[i]
        }
    }

    
}

console.log(singleNumber([1]));
