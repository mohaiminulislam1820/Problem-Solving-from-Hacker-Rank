/* 
given ti and ti+1, ti+2=ti+(ti+1)^2
we have to return nth term of this series 
3<=n<=20


*/

function fibonacciModified(t1, t2, n) {
    // Write your code here
    let temp;
    for(let i=2;i<n;i++){
        temp=BigInt(t1)+BigInt(t2*t2);
        t1=t2;
        t2=temp;
        if(i==n-1)
            return t2;
    }
}
console.log(fibonacciModified(0,1,3))