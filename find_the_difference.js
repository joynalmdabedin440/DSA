var findTheDifference = function(s, t) {
    let s1=s.split("")
    for(let i of t){
        if(!s1.includes(i)){
            return i

        }
        s1.splice(s1.indexOf(i),1)
    }
};
console.log(findTheDifference("abcd","abcde")) //e