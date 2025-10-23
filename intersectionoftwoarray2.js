var intersect = function (nums1, nums2) {
    // let result = [];
    // for (let num of nums1) { 
    //     if (nums2.includes(num)) { 
    //         result.push(num);
    //         nums2.pop(num)
    //     }

    // }

    // return result;

    let result = [];
    for (let num of nums1) { 
        let index = nums2.indexOf(num);  // find where num exists in nums2
        if (index !== -1) {              // if found
            result.push(num);            // add to result
            nums2.splice(index, 1);      // remove that one occurrence
        }

    }

    return result;

    
};

console.log(intersect([1,2,2,1], [1,2]));