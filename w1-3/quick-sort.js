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

let a=[];
for(let i=0,j=9999;i<999;i++,j--)
  a[i]=j;

let arraySample=[13, 7, 6, 45, 21, 9, 101, 102];
console.log(quickSort(a));