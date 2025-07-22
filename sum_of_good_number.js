var sumOfGoodNumbers = function(nums, k) {
    let sum=0
    for(let i=0;i<nums.length;i++){

        if (i - k >= 0 && i + k < nums.length){
        if((nums[i]>nums[i-k])&&(nums[i]>nums[i+k])){
            sum=sum+nums[i]
        }
        }

        
    }
    return sum
};