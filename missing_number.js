const missingNumber = (nums) => {
   let sum=0
    for (let i of nums) {
        sum+=i
    }

    let sum1 = 0
    for (let i = 0; i <= nums.length; i++){
        sum1 +=i
    }

    return sum1-sum
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
