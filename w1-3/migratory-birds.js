/* 
we will get an array containing only 1 to 5 
we have to get the integer which is most frequented in the array and get the lowest integer if there is 2 or more with the most frequency
we will create a frequency array and add 1 to it we will return the index of the max value of the frequency array.
*/

function migratoryBirds(arr) {
    // Write your code here
    const freq=[0,0,0,0,0];
    for(let i=0;i<arr.length;i++)
        freq[arr[i]-1]++;
    const max=Math.max(...freq);
    return freq.indexOf(max)+1;
}

console.log(migratoryBirds([1,1,2,2,3]));