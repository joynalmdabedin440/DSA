var sumOfGoodNumbers = function(nums, k) {
    let sum=0
    for (let i = 0; i < nums.length; i++){
        
        if (((i - k) < 0 || (nums[i - k] < nums[i])) && ((i + k) >= nums.length || (nums[i + k] < nums[i]))) {
            sum+=nums[i]
        }

        // else if ((i + k) >= nums.length || (nums[i + k] < nums[i])) {
        //     sum+=nums[i]
        // }

        // if (i - k >= 0 && i + k < nums.length){
        // if((nums[i]>nums[i-k])&&(nums[i]>nums[i+k])){
        //     sum=sum+nums[i]
        // }
        // }

        // else if((i-k<0&&i+k<nums.length)|| (i-k>0 &&i+k>nums.length) ){
        //     sum+=nums[i]
        // }
    }
    return sum
};

console.log(sumOfGoodNumbers([1,3,2,1,5,4],2));
