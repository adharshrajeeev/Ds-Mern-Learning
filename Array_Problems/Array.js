const array=[1, 5, 9, 12, 18, 21, 25, 30]
const duplicateArray=[3, 7, 2, 5, 7, 9, 2, 3, 6, 5, 9]

function printFunction(func) {
    const result = func();
    console.log("Returned value:", result);
  }
  

// 1. How do you declare an empty array in JavaScript? 
const sample=[]

// 2. How do you access the elements of an array by index?
function index(array){
    return array[1]
}

// 3. How do you add elements to the end of an array?

function addToEnd(array,num){
    return [...array,num];
}

function addToEnd2(array,num){
    array[array.length]=num;
    return array
}

// 4. How do you remove elements from the end of an array?

function removeLast (array){
   array.length=array.length-1;
   return array
}

// 6. How do you check if an element exists in an array?
function elementExists(array,element){
    for(var i=0;i<array.length;i++){
        if(array[i]==element){
            return 1
        }
    }
    return 0
}

// 8. How do you concatenate two arrays together?

function concatinate(array1,array2){
    return [...array1,...array2];
}

// 9. How do you find the index of a specific element in an array?

function findIndex(array,element){
    for(var i=0;i<array.length;i++){
        if(array[i]==element){
            return i+1
        }
    }
    return null
}

//INTERMEDIATE


// 1. How do you add elements to the beginning of an array?

function addToBeginning(array,element){
   array.unshift(element)
   return array
}




printFunction(()=>addToBeginning(array,1000))