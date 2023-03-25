/* 
n is the length of the array
ar is the integer array
we have to find how many pairs of same number is in the array
we can make a set to get the unique items in the array, an empty array with same length as the set to increase count from 0
then divide the array members by 2 and take the floor to a accumulator

would have been better to do a frequency array and do the last reduce map in that array;
we could have filtered the array for getting the unique array
*/

function sockMerchant(n, ar) {
    // Write your code here
    let a=new Set();
    for(let i=0;i<n;i++){

        if(!a.has(ar[i]))
            a.add(ar[i]);
    }
    let o=[],count=0;
    o.length=a.size;
    for(let i=0;i<o.length;i++){
        o[i]=0;
    }
    
    a=[...a];
    for(let i=0;i<n;i++){
        for(let j=0;j<a.length;j++){
            if(a[j]==ar[i]){
                o[j]++;
                break;
            }
        }
    }
    
    count=o.reduce((sum,x)=>sum+=(Math.floor(x/2)),0);
    return count;
}

console.log(sockMerchant(10,[1,1,3,1,2,1,3,3,3,3]));
