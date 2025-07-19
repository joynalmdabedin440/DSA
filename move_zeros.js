  function moveZeroes(nums) {
      let x = 0
      
   
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== 0) {
            [nums[x],nums[i]] = [nums[i],nums[x]]
            x = x + 1
            
        }
     
      }
      
    
      
};

moveZeroes([0,1,2,0,3])
