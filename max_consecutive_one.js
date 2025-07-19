const maxOne = function (nums) {
    
    let c = 0
    let maxC=0
    
    for (let i = 0; i < nums.length; i++){
        
        if (nums[i] == 1) {
            c++
            maxC= Math.max(maxC,c)
        }

        else {
            c=0
        }
               
        
    }

    return maxC
}

console.log(maxOne([1,1,0,1,1,1]));
