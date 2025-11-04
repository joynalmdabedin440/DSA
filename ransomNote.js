var canConstruct = function(ransomNote, magazine) {

    let letter;
    let magazine1=magazine.split("")
    for(let i of ransomNote){
        if(!magazine1.includes(i)){
            return false
        }
        magazine1.splice(magazine1.indexOf(i),1)

    }
    return true
};
console.log(canConstruct("aa","ab")) //false