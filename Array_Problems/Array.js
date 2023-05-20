const array=[1, 5, 9, 12, 18, 21, 25, 30]


const sortArray=[8,1,9,3,5,2,10,6,4,7];
const ascArray=[1,2,3,4,5,6]
const duplicateArray=[1,2,3,3,2,4,5]

function printFunction(func,passedArray) {
    const result = func();
    console.log("Passed Array:",passedArray)
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

// 2. How do you remove elements from the beginning of an array?

function removeElementBeg(array){
    array.shift();
    return array
}

// 3. How do you remove elements from a specific index in an array?

function removeElement (array,index){
    var newArray=[]
    for(var i=0;i<array.length;i++){
        if(i!==index){
            newArray.push(array[i])
        }
    }
    return newArray;
}

// 4. How do you modify elements at a specific index in an array?

function modifyArrayAtIndex(array,element,index){
    for(var i=0;i<array.length;i++){
        if(i==index){
            array[i]=element
        }
    }
    return array
}

// 6. How do you sort the elements of an array in ascending order?

function sortArryAtAsending(array){
    var temp=0;
    for(let i=0;i<array.length;i++){
       for(let j=i+1;j<array.length;j++){
        if(array[i] < array[j]){
            temp=array[i];
            array[i]=array[j];
            array[j]=temp
        }
       }
    }
    return array
}


// 7. How do you reverse the order of elements in an array?

function reverseArray(array=[]){
    var newArray=[];
    for(var i=array.length-1;i>=0;i--){
        newArray.push(array[i])
    }
    return newArray
}

// 8. How do you remove duplicate elements from an array?

function removeDuplicates(array=[]){
    var newArray=[];
    for(var i=0;i<array.length;i++){
        let flag=0
        for(var j=i+1;j<array.length;j++){
            if(array[i]==array[j])
            {
               flag=1;
               break
            }
            
         }
        if(flag==0)newArray.push(array[i])
    }
    return newArray
}

// 10. How do you convert an array to a string?

function convertArrayToString(array=[]){
    return array.join(" ")
}

function binarySearch(array=[],target){
    let start = 0;
    let end = array.length - 1;
    while(start <= end){
        const mid=Math.floor((start + end)/2);
        if(array[mid] ===target ){
            return mid
        }else if(array[mid] <  target){
            start=mid+1
        }else{
            end=mid - 1
        }

    }
    return -1; // Target not found
}

printFunction(()=>binarySearch(ascArray,10),ascArray)