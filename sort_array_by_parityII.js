
var sortArrayByParityII = function(nums) {
    let even = 0
    let odd = 1
    let result = []


    for (let i = 0; i < nums.length; i++){
         if (nums[i] % 2 == 0)  {
            result[even] = nums[i]
            even += 2
        }

        else{
            result[odd] = nums[i]
            odd +=2
        }

    }

    return result
};

console.log(sortArrayByParityII([4,2,5,7]))

