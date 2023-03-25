/* 
n is the number of empty arrays in array arr
queries are strings that contain 3 space separated integers
 just follow the stupidly written instructions
*/

function dynamicArray(n, queries) {
    // Write your code here
    let arr=[],lastAnswer=0,answer=[];
for(let i=0;i<n;i++){
    arr.push([])
}
for(let a of queries){
let x=a[1],y=a[2];
let idx=(x^lastAnswer)%n;
if(a[0]==1)
    arr[idx].push(y);
else 
{    lastAnswer=arr[idx][y%arr[idx].length]
    answer.push(lastAnswer);}
}

}

console.log(dynamicArray(7,''));
