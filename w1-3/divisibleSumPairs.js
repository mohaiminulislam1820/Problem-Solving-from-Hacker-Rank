/* Given an array of integers and a positive integer k, determine the number of  pairs where (i<j) and arr[i] + arr[j] is divisible by k. */
//no need for sorting since we need index pairs
//since i<j we need to iterate over n-2
//two nested for loop
//if (arr[i] + arr[j])%k==0 count+=1;
// time complexity 



function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count=0;
for(let i=0;i<n-1;i++)
    {for(let j=i+1;j<n;j++){
        if((ar[i]+ar[j])%k==0 )
            count++;
        }
        }
return count;
}

console.log(divisibleSumPairs(6,2,[1, 3, 2, 6, 1, 2]));;