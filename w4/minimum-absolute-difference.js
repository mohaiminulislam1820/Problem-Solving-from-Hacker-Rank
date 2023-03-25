/* 
input is an array of integers
return minimum absolute difference between any two pair of elements
sort the array and then run loop on it.
*/

function minimumAbsoluteDifference(arr) {
    // Write your code here
    const sortedArray=arr.sort((a,b)=>a-b);
    const length=sortedArray.length;
    let minAbsDiff=Math.abs(arr[0]-arr[1]);
    for(let i=2;i<length;i++){
        if(minAbsDiff>Math.abs(arr[i]-arr[i-1]))
            minAbsDiff=Math.abs(arr[i]-arr[i-1]);
    }
    return minAbsDiff;
}

console.log(minimumAbsoluteDifference());