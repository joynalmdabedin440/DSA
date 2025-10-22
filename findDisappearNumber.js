var findDisappearedNumbers = function(nums) {
    const numSet= new Set(nums)
    let arr = []
    
    for (let i = 1; i <= nums.length; i++){
        if (!numSet.has(i)) {
            arr.push(i)
        }
    }
    return arr
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));