function getMinMax(arr,n){

    let max=arr[0];
    let min= arr[0];
    
    for(var i=0;i<n;i++){
        if(arr[i] >  max){
            max=arr[i]
        }
        if(arr[i] < min){
            min=arr[i]
        }
    }
    
    console.log(`MIN=${min},MAX=${max}`)
}
getMinMax([1,5,3,9,10,23],6)