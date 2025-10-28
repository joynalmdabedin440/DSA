
var fibGenerator = function*() {
    let a=0
    let b=1

    while(true){
        yield a;
        [a,b]=[b,a+b]
    }
};
//process.on("exit", () => require("fs").writeFileSync("display_runtime.txt", "0"));
const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2