var reverseVowels = function(s) {
    const vowel= ["a","A", 'e', 'i', 'o',"E",'I','O']
    
    let stack = []
    
    let arr= s.split('')

    for(let i of arr){
        if(vowel.includes(i)){
            stack.push(i)
        }
    }
    let n=stack.length
    for(let i=0; i<arr.length;i++){
        if(vowel.includes(arr[i])){
            arr[i]=stack[n-1]
            n--

        }
    }

    return arr.join('');
};

console.log(reverseVowels("hello"));