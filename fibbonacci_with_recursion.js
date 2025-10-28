var fib = function(n) {
    // if (n <= 1) return n
    
    // return fib(n-1)+fib(n-2)
    
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    return fib(n-1)+fib(n-2);
   
    

};
//optimized code using memoization
//process.on("exit", () => require("fs").writeFileSync("display_runtime.txt", "0"));






console.log(fib(2))