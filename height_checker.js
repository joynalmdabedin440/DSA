var heightChecker = function (heights) {
    
    let newArr= [...heights].sort((a,b)=>a-b)
    let counter=0
    // for (let i = 0; i < newArr.length; i++){
    //     if (newArr[i] > newArr[i + 1]) {
    //         [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]]           
    //     }
    // }
    
    

    for (let i = 0; i < heights.length; i++){
        if (newArr[i] !== heights[i]) {
            counter++
        }
    }

    return counter
};

console.log(heightChecker([5,1,2,3,4]));
