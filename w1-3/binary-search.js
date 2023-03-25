let arraySample=[-2,1,2,3,5,6,29];
function binarySearch(arr,target){
    if(!arr.includes(target))
        return -1;
    let i=Math.floor(arr.length/2);
    let middle=arr[i];
    while(middle!=target)
    {
        if(target>middle)
            {
            i=Math.floor((arr.length-i)/2+i);
            }
        else
        {
            
            i=Math.floor(i/2);
        }
        middle=arr[i];
    }
    return i;
}
console.log(binarySearch(arraySample,-2));