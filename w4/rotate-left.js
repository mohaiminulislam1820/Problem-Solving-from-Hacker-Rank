/* 
have to rotate array members on the left side based on the integer given d
d can be 1 to array.length
if d = array length then return the array without change
if we do this with spread operator, [end,start]=[arr.slice(0,d),arr.slice(d,arr.length)]
return [...start,...end]
*/

function rotateLeft(d, arr) {
    // Write your code here

    if(d==arr.length)
        return arr;
    const end=arr.slice(0,d),start=arr.slice(d,arr.length);

    return [...start,...end];
}
const arr=[]
for (i=1;i<20000000;i++)
    arr.push(i);
console.log(rotateLeft(5000000,arr));