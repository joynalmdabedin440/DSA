var finalString = function(s) {
    let str=s.split("")

    for(let i=0;i<str.length;i++){
        if(str[i]==="i"){
            str.splice(i, 1)
            
            let n=i-1
            for(let j=0;j<n;j++){
                [str[j],str[n]]=[str[n],str[j]]
                n--

            }

            i--

        }
    }

    return str.join("")
};
console.log(finalString("poiinter"));