var findDifference = function(nums1, nums2) {
    const set1= new Set(nums1)
    const set2 = new Set(nums2)

    let arr1=[]
    let arr2=[]
    
    for (let num of set1) {
        if (!set2.has(num)) {
            arr1.push(num)
        }
    }
    for (let num of set2) {
        if (!set1.has(num)) {
            arr2.push(num)
        }
    }

    return [arr1,arr2]
};

console.log(findDifference([1,2,3], [2,4,6]))