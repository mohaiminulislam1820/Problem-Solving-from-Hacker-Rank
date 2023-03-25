/* 
input is an array of triangle sides length in integer format
we have to return an array with the triangle which has the highest perimeter, return the one with the maximum side if there is multiple possible triangles with max perimeter posiible and return [-1 ] if triangle not possible to make

triangles lowest two sides sum has to be greater than the third side
the order of the return array has to be ascending

the possible triangles are i=0 to n-3 for i=0 triangle sides are [i,i+1,i+2] (i+=3 for next iteration)
array is sorted no need to sort, add the first two and see if sum is greater than third
if its a triangle, we keep it
we get the sum of three and store it in currentSum
if currentSum >prevSum && i+2 of prev array is greater than i+2 of current array maxArray=[i,i+1,i+2], prevsum=currentsum, prevarray=currentarray
 
after sorting ascending looping from the end is better for time complexity
*/

function maximumPerimeterTriangle(sticks) {
    // Write your code here
let prevArray=[0,0,0],prevSum=0;
sticks=sticks.sort((a,b)=>b-a);

for(let i=0;i<=sticks.length-3;i++){
    if(sticks[i+2]+sticks[i+1]>sticks[i] && sticks[i]+sticks[i+1]+sticks[i+2]>prevSum && sticks[i]>prevArray[2]){
        prevArray=[sticks[i],sticks[i+1],sticks[i+2]];
        prevSum=[sticks[i]+sticks[i+1]+sticks[i+2]];

    }
}
return prevSum==0?[-1]:prevArray.reverse();
}

console.log(maximumPerimeterTriangle([1,10,3,4,5,2]));