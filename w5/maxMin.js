/* 
input is an array and an integer k
2<=n 2<=k<=n  arr[i]>=0
we have to create a k length array where max of new array-min of new array is minimum and return that minimum result
*/

function maxMin(k, arr) {
    // Write your code here

    const sortedArray=arr.sort((a,b)=>a-b),length=arr.length;
    let unfairness=sortedArray[k-1]-sortedArray[0];
    for(let start=1,end=k;end<length;start++,end++){
        if((sortedArray[end]-sortedArray[start]) < unfairness)
        unfairness = sortedArray[end] - sortedArray[start];
    }
    
    return unfairness;


}
let s=`4504
1520
5857
4094
4157
3902
822
6643
2422
7288
8245
9948
2822
1784
7802
3142
9739
5629
5413
7232`.split('\n')

console.log(maxMin(5,s));