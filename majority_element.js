var majorityElement = function(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     let c = 0
    //     for (let j = 0; j < nums.length; j++) {
    //         if (nums[i] === nums [j]) {
    //             c += 1
    //         }
    //         if (c > nums.length / 2) {
    //             return nums[i]
    //         }
    //     }
    // }

    let count=0
    let m=null

    for(let num of nums){
        if(count===0){
            m=num
        }

        if(num===m){
            count++

        } else count--
        
    }
    return m
};

console.log(majorityElement([2,2,1,1,1,2,2]));