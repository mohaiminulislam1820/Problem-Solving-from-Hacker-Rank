function mergeSort(arr){

    if(arr.length<2)
        return arr;
    let medianIndex=Math.floor((arr.length)/2)
    
    let left= arr.slice(0,medianIndex);
    let right=arr.slice(medianIndex);

    
    return merge(mergeSort(left),mergeSort(right));


    
    
}

function merge(left,right){
    let sortedArr=[];
    while(left.length&& right.length){
        if(left[0]<right[0])
          sortedArr.push(left.shift());
        else
          sortedArr.push(right.shift());
    }

    return [...sortedArr,...left,...right];

}

let sampleArray=[13, 7, 6, 45, 21, 9, 101,-2, 102];
let a=[];
for(let i=0,j=999998;i<999999;i++,j--)
  a[i]=j;
console.time();
console.log(mergeSort(a));
console.timeEnd();
