function secondLargest(arr){
    var temp=0;
    for(var i=0;i<arr.length;i++){  //method 1
        for(var j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                temp=arr[i];
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr[arr.length-2];   
}

// console.log(secondLargest([12, 35, 1, 10, 34, 1]));


function secondLargestMethod2(arr){
    arr.sort((a,b) => b-a)
    let secondMax = arr[1];
  return secondMax;
}

console.log(secondLargestMethod2([10,5,10,9]))