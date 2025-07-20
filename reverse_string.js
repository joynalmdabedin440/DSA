const reverseString = (s) => {
    let last = s.length - 1 
    let i = 0
    

    while (last > i) {
         [s[i], s[last]] = [s[last], s[i]]
        last--
        i++
    }
    
   

   console.log(s);
   
}

reverseString(["H","a","n","n","a","h"]
)