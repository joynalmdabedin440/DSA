

// function factorial(n) {
//     if (n === 1) return 1
    
//     return n*factorial(n-1)
// }

// console.log(factorial(5));

// Reverse a string

function reverseString(str) {
    
    if (str.length < 1) return
    
    return str[str.length-1]+reverseString(str.slice(0,-1))
}

console.log(reverseString('abcd'));
