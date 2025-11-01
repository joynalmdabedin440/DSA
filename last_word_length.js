var lengthOfLastWord = function(s) {
    const arr= s.split(" ")
    let val =arr.pop()
    
    while(val===""){
        val= arr.pop()
    }
    
    return val.length
    
};
console.log(lengthOfLastWord("   fly me   to   the moon  "))