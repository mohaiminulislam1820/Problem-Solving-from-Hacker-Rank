function findMedian(arr) {
    // Write your code here
for(let i=0;i<arr.length;i++){
    function quickSort(arr){
    

    
        if(arr.length<2)
            return arr;
        
        let pivot=arr[arr.length-1];
        let left=[];
        let right=[];
        
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]<=pivot){
                left.push(arr[i]);
            }
            else
                right.push(arr[i]);
        }
        
        
        return [...quickSort(left), ...[pivot], ...quickSort(right)];
    }
    const sortedArray=quickSort(arr);
    medianIndex=Math.floor(arr.length/2);
    return arr[medianIndex];

}
}