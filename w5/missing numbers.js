/* 
input is 2 arrays , gotta print the numbers that are missing from the second array

return the missing numbers sorted ascending, only include 1 if there is same number multiples

*/

function missingNumbers(arr, brr) {
    // Write your code here
    for(let i = 0; i<arr.length;i++){
        brr.splice(brr.indexOf(arr[i]), 1);
    }
    return [...new Set(brr)].sort((a,b)=>a-b);
}

console.log(missingNumbers(`203 204 205 206 207 208 203 204 205 206`.split(' '),`203 204 204 205 206 207 205 208 203 206 205 206 204 401 401 303`.split(' ')));