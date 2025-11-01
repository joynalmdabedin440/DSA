//sum of n number using recursion
function sum(n){
    if(n==1)return 1
    return n+sum(n-1)
}

console.log(sum(500))

//sum of all number in array
function sumArray(arr){
    if(arr.length<=1){
        return arr[0]
    }
    let val=arr.pop()
    
    
    return val+sumArray(arr)
    
}

console.log(sumArray([1,2,3,4,100]))

//n factorial using recursion

function factorial(n){
    if(n==1)return 1
    return n*factorial(n-1)
}

console.log(factorial(5))

//power of two or not
var isPowerOfTwo = function(n) {
    if(n<0||n==0)return false

    if(n==1)return true

    if(n%2==0){
        return isPowerOfTwo(n/2)
    }
    return false
};