 /* 
 we will get an array with length upto 100
 have to return the counting frequency array of length 100 every time
 just how many times a value was on that input array
 create an empty array with same length as the input array
 populate it with count value in a for loop
 */

function countingSort(arr) {
    // Write your code here
    let a= [];
    let temp;
    for(let i=0;i<100;i++){
        a[i]=0;   
    }
    for(let i=0;i<arr.length;i++){
        temp=arr[i];
        a[temp]++;
    }

    return a;

}
/* function countingSort(arr) {
    const freq = new Array(100).fill(0);
    for(var i=0;i<arr.length;i++)
    {
        freq[arr[i]] +=1;
    } 
    return freq;
    } */
console.log(countingSort([1,1,3,2,1]))
let a=[1,1,3,2,1,78,2,34,43,36,76,53,45,65,34];
let counted=countingSort(a);
let sorted=[];
sorted.length=a.length
let j=0;
for(let i=0;i<counted.length;i++){
let count=counted[i];
if(count>0){
    
    for(;count>0;j++,count--){
        sorted[j]=i;
    }
}
}
console.log(sorted)