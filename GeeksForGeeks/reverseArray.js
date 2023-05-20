function reverseArray(array){
var reversedArray=[];
for (let index = array.length-1; index >= 0 ; index--) {
    reversedArray.push(array[index])
    
}
return reversedArray
}

console.log(reverseArray([1,2,3,4]))

