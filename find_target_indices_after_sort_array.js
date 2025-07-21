var targetIndices = function(nums, target) {
    nums = nums.sort((a, b) => a - b)

    
    
    let match=[]
    for (let i = 0; i < nums.length;i++) {
        if (nums[i] === target) {
            match.push(i)
        }
    }

    return match
};

console.log(targetIndices([1,2,5,2,3],2));
