/* 
input is an integer array
we have to perform xor on every subarray possible and xor on every result of those previous xor together
first we get all the subarrays and do xor on them and push them into result array and then reduce them into a single value

easier way to do this is if there is even number array members then their xor is 0, if arr length is odd then just xor the odd placed members

*/

function sansaXor(arr) {
    // Write your code here
    let k=0,result=[];
    result.push(arr.reduce((previous,current)=>previous^current))
for(let i=2;i<=arr.length;i++){
let subArray=[];
;
    for(let start=0,end=i;end<=arr.length;start++,end++){
        subArray.push(arr.slice(start,end))
    }
    k++;
    for(let x of subArray){
        result.push(x.reduce((previous,current)=>previous^current))
    }
}
return result.reduce((previous,current)=>previous^current);
}

console.log(sansaXor([3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3]))