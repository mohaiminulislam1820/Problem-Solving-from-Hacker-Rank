/* 
input is an integer array
have to find the longest subarray length where difference between any two elements is less than or equal to zero

we will run a loop from i= 1, startIndex=0; initialized outside loop,count=0,prevCount=0;
if a[i]-a[i-1]>1
    {startIndex=i;
    if count>prevCount
        prevCount=count;
        count=0;
    }
else count++

return prevCount;
*/

function pickingNumbers(a) {
    // Write your code here
    a.sort((a,b)=>a-b)
   
    let count=1,prevCount=1,startIndex=0;
    for(let i=1;i<a.length;i++){
        if(a[i]-a[i-1]>1||a[i]-a[startIndex]>1){
            
            if(count>prevCount)
                prevCount=count;
            count=1;
            startIndex=i;
        }
        else count++;
    }
    if(count>prevCount)
        prevCount=count;
    return prevCount;
}

console.log(pickingNumbers([9,  6, 13, 16,  5, 18,  4, 10,  3, 19,  4,  5,
    8,  1, 13, 10, 20, 17, 15, 10,  6, 10, 13, 20,
   18, 17,  7, 10,  6,  5, 16, 18, 13, 20, 19,  7,
   16, 13, 20, 17,  4, 17,  8, 19, 12,  7, 17,  1,
   18,  3, 16,  4,  5,  3, 15, 17,  6, 17, 14, 11,
   11,  7, 11,  6, 15, 15, 12,  6, 17, 19,  8,  6,
   13,  9, 10, 19, 14, 18,  7,  9, 11, 16, 11, 20,
    4, 20, 10,  7,  8,  4,  2, 12, 11,  8, 12, 13,
   19,  8,  8,  5]));