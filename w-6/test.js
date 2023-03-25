const selectionSort=(arr)=>{
  let smallest,smallestIndex,count=0;
  for(let i=0;i<arr.length;i++){
    smallest=arr[i],smallestIndex=i;
    
    for(let j=i+1;j<arr.length;j++){
      
      if(arr[j]<smallest){
        smallest=arr[j],smallestIndex=j;
      }
      console.log(++count);
    }
    
    let temp=arr[i];
    arr[i]=smallest;
    arr[smallestIndex]=temp;
  }
  return arr;
}
console.log(selectionSort([3,52,1,45,6,34]))