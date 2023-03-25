let arraySample=[-2,1,2,3,5,6,29];

function recursiveBinarySearch(arr,target){

    return search(arr,target,0,arr.length-1)
}

function search(arr, target,leftIndex,rightIndex) {
    
    if(leftIndex>rightIndex)
        return -1;
    let middle=Math.floor((leftIndex+rightIndex)/2);
    
    
    if(arr[middle]==target)
    return middle;
    else if(arr[middle]>target)
    {
        
        return search(arr,target,leftIndex,middle-1);
    }
    else if(arr[middle]<target){
    
    return search(arr,target,middle+1,rightIndex);
}

}
let big=[];
for(i=0;i<100000;i++)
    big.push(i);
console.time('h');
recursiveBinarySearch(big,3);
console.timeEnd('h')