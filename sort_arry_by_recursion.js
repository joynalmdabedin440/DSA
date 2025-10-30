function insert(arr,value){
    if(arr.length ==0|| arr[arr.length-1]<=value){
        arr.push(value)
        return
    }
    let temp= arr.pop()
    insert(arr,value)
    arr.push(temp)
}

function sort(arr){
    if(arr.length==1) return
    
    let value= arr.pop()
    
    sort(arr)
    
    insert(arr,value)
}

let arr=[1, 5, 0, 2]
sort(arr)

console.log(arr)