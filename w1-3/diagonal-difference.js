/* 
2d array input
if length is n
first cross diagonals are [0][0], [0+i][0+j] [n],[n]
second cross diagonals are [0][n] [0+i][n-j]
i,j will be increasing by one
*/

function diagonalDifference(arr) {
    // Write your code here
    let diagonalSum1=0,diagonalSum2=0;
    for(let i=0,j=0;i<arr.length;i++,j++){
        diagonalSum1+=arr[0+i][0+j];
    }
    for(let i=0,j=arr.length-1;i<arr.length;i++,j--){
        diagonalSum2+=arr[0+i][j];
    }
    return Math.abs(diagonalSum1-diagonalSum2);
    
}
console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]))