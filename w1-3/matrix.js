/* 
we have to find the upper quardant size first
matrix.length=n

then then size of upper left quadrant is n/2
n/2 matrix is n[0][0 to n/2-1]
n[1][0 to n/2-1]
n[n/2-1][0 to n/2-1]

n[0,0] can have four positions after reversing columns and rows
n[0][n-1],n[0][0],n[n-1][0],n[n-1][n-1]
n[1,0] can have four positions after reversing
n[1][0]n[n-2][0]n[1][n-1]n[n-2][n-1]

so this gives us insight that the max number of any one position is out of those 4 positions max value

so 0,0 max value is 119 the indexes are 
0,1 max value is 114
1,0 max value is 56
1,1 max value is 125
i=0 to i=n/2
r,c r,n-1-c n-1-r,c n-1-r,n-1-c


*/

function flippingMatrix(matrix) {
    // Write your code here
    
    const n =matrix.length;    
    let sum=0;
 for(let r=0;r<n/2;r++)
    for(let c=0;c<n/2;c++)
        sum+=Math.max(matrix[r][c],matrix[r][n-1-c],matrix[n-1-r][c],matrix[n-1-r][n-1-c]); 

return sum;
}

console.log(flippingMatrix([[ 112, 42, 83, 119 ],
    [ 56, 125, 56, 49 ],
    [ 15, 78, 101, 43 ],
    [ 62, 98, 114, 108 ]]))
