var checkString = function(s) {
    // if(!s.includes("a")) return true
    // if(!s.includes("b")) return true

    // let a=[]
    // let b=[]

    // for(let i=0;i<s.length;i++){
    //     if(s[i]==="a"){
    //         a.push(i)
    //     }
    //     if(s[i]==="b"){
    //         b.push(i)
    //     }

    // }

    // for(let i of a){
    //     for(let j of b){
    //         if(i>j)return false
    //     }
    // }
    // return true

    return !s.includes("ba")
};
console.log(checkString("aaabbb"));