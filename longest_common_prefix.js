var longestCommonPrefix = function(strs) {
    let p = strs[0]

    if (strs.length === 0) {
        return ""
    }
    
    for (let str of strs) {

        while ( !str.startsWith(p)) {
            p = p.slice(0, -1)
            
            if(p==="")return ""
        }
        
        
    }

    return p
};

console.log(longestCommonPrefix(["dog","racecar","car"]))
