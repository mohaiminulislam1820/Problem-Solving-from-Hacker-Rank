/* 
s is the array, d is the target value, m is the length of the desired arrays
1<=s[i]<=5
we have to find how many cases of m length arrays that are equal to d




*/


function birthday(s, d, m) {
    // Write your code here
    let count=0;
    if(m>s.length)
        return count;

    for(let i=0;i<=s.length-m;i++){
        let sum=0;
        for(let j=i;j<i+m;j++)
            sum+=s[j];
        if(sum==d)
            count++;
    }
    return count;
}
console.log(birthday([2,5,1,3,4,4,3,5,1,1,2,1,4,1,3,3,4,2,1],18,7))