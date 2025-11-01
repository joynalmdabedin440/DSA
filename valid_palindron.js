// var isPalindrome = function(s) {

//    if(s===" "){return true}
//    s=s.toLowerCase() 
//    s=s.replace(/[^a-zA-Z0-9]/g,"")

//    let x=s.length-1
//    let palin;
//    let i=0;
//    while(i<x){
//     if(s[i]===s[x]){
//         palin=true
//         i++
//         x--
//     }
//     else {
//         return false
//     }

//    }

//    return palin

// };
var isPalindrome = function(s) {
    // Convert to lowercase and remove all non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Two-pointer approach
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome("race a car"));
