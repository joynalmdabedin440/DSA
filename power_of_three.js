var isPowerOfThree = function(n) {
    if (n < 0 || n == 0) {
        return false
    }
    if (n === 1) {
        return true
    }


    if (n % 3 === 0) {
         return isPowerOfThree(n/3)
    }

   return false
};

//power of four
var isPowerOfFour = function(n) {
    if(n<0|| n===0)return false

    if(n==1)return true

    if(n%4==0){
        return isPowerOfFour(n/4)
    }

    return false
};


console.log(isPowerOfThree(9)); // true