var findLucky = function (arr) {
    let result=[]

    for (let i = 0; i <= arr.length; i++){
        let counter=0
        for (let j = 0; j <= arr.length; j++){
            if (arr[i] === arr[j]) {
                counter++
            }
        }

        if (counter == arr[i]) {
            result.push(arr[i])
        }
    }
    if (result.length === 0) {
        return -1
    }
    return Math.max(...result)
};
console.log(findLucky([2,2,3,4]))