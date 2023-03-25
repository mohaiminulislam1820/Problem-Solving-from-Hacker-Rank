function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let nti=arr[i];
        for(j=i-1;j>=0;j--){
            
            if(nti<arr[j])
            {
                
                arr[j+1]=arr[j];
            }
            else
                break;
            
        }
        arr[j+1]=nti;
    }
    
    return arr;
}
let sampleArray=[243, 45, 23, 356, 3, 5346, 35, 5];

console.log(insertionSort(sampleArray));