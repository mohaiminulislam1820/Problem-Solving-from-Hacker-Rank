function bubbleSort(arr) {
    for(let i=0;i<arr.length;i++){
        let swap=false;
        for(let j=0;j<arr.length-1;j++){

            if (arr[j]>arr[j+1]) {
                
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
               swap=true; 
            }
        }
        if (!swap) {
            break;
        }
    }
    return arr;
}
let sampleArray=[243, 45, 23, 356, 3, 5346, 35, 5]

console.log(bubbleSort(sampleArray));