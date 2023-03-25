/* 
a b are two arrays and k is the target value
if for all a'[i]+b'[i]>=k
print yes or no if it doesnt satisfy
A.sort B.sort B.reverse
if A[i]+B[i]>=k return yes or return no this is one solution but not efficient at all
*/


function twoArrays(k, A, B) {
    // Write your code here

A.sort((a,b)=>a-b);
B.sort((a,b)=>b-a);
for(let i=0;i<A.length;i++){
    if(A[i]+B[i]<k)
        return 'NO';
}
return 'YES';
}

console.log(twoArrays(5,[1, 2, 2, 1],[3, 3, 3, 4]));
