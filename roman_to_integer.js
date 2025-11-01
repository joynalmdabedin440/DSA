
var romanToInt = function(s) {
    let sum=0

    if(s.includes("IV")){
        sum=sum+4
        s = s.replaceAll("IV", "");
    }
    if(s.includes("IX")){
        sum=sum+9
         s = s.replaceAll("IX", "");
    }
    if(s.includes("XL")){
        sum=sum+40
         s = s.replaceAll("XL", "");
    }
    if(s.includes("XC")){
        sum=sum+90
         s = s.replaceAll("XC", "");
    }
    if(s.includes("CD")){
        sum=sum+400
         s = s.replaceAll("CD", "");
    }
    if(s.includes("CM")){
        sum=sum+900
         s = s.replaceAll("CM", "");
    }

    for (let i of s){
        if(i=="I"){
            sum+=1
        }
        if(i=="V"){
            sum+=5
        }
        if(i=="X"){
            sum+=10
        }
        if(i=="L"){
            sum+=50
        }
        if(i=="C"){
            sum+=100
        }
        if(i=="D"){
            sum+=500
        }
        if(i=="M"){
            sum+=1000
        }
    }

    return sum
};

//process.on("exit", () => require("fs").writeFileSync("display_runtime.txt", "0"));