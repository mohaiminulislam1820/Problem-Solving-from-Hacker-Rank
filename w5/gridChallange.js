/* 
input is grid array containing strings
string lengths are same
we have to find if string rows and string columns are in alphabetical order after sorting them individually if yes return YES else NO 


first sort them in individually for row sort
just need to check if they are sorted in columns
better way is to see if their ascci value in downwards is increasing in column order rather than sorting the column and comparing the two

*/

function gridChallenge(grid) {
    // Write your code here
let columns=Array(grid[0].length).fill(''),sortedColumns=[];
for(let i=0;i<grid.length;i++){
grid[i]=grid[i].split('').sort().join('');
}
/* for(let i=0;i<grid[0].length;i++){
    for(let j=0;j<grid.length;j++){
        columns[i]+=grid[j][i];
    }
    sortedColumns[i]=columns[i].split('').sort().join('');
    
     if(columns[i]!==sortedColumns[i]){
         return "NO";
     }
} */

for (let i=0;i<grid[0].length;i++){
    for(let j=0;j<grid.length-1;j++){

        if(grid[j].charCodeAt(i)>grid[j+1].charCodeAt(i))
            return "NO";
    }
}

return "YES";
}

console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'hello']));