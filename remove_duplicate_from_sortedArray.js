let removeDuplicate = function (nums) {
    
    let x = 0;
    for (let i = 1; i <= nums.length;i++){
        if (nums[x] !== nums[i]) {
            x = x + 1

            nums[x]=nums[i]
            
        }
    }
    return x

    
}

let l=removeDuplicate([1,1,2])

console.log(l);
