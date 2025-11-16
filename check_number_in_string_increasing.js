var areNumbersAscending = function(s) {
    let s1= s.split(" ")
    let arr=[]

    for(let i of s1){
        if(!isNaN(parseInt(i))){
            arr.push(parseInt(i))
        }
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i]>=arr[i+1])return false
    }
    return true

};




console.log(areNumbersAscending("hello world 5 x 5"));
