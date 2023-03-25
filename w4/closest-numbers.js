/* 
input is unsorted array with length >2
we have to find the numbers pairs whose absolute difference is lowest 

we will sort the array using sort method
declare a output empty array
 lowest abs difference will be the first two numbers difference
 then we check for the next two and compare if the difference is less than the previous difference, change the lowest difference if so 
 and if its lowest we will push the two members into the output array
 if lowest difference is changed we will empty the output array using assignment and push the new two numbers for the lowest difference

 worst case would be O(2n) BigO best case O(n) 
*/

function closestNumbers(arr) {
    // Write your code here
    const sortedArray=arr.sort((a,b)=>a-b);
    const lowestAbsDifference=(x,y)=>Math.abs(x-y);
    let difference=lowestAbsDifference(arr[0],arr[1]);
    let output=[arr[0],arr[1]];
    if(arr.length>2){
        for(let i=2;i<arr.length;i++){
            let newDifference=lowestAbsDifference(arr[i],arr[i-1]);
            if(newDifference<difference){
                difference=newDifference;
                output=[];
                output=[...output,arr[i-1],arr[i]];
            }
            else if(newDifference==difference){
                output=[...output,arr[i-1],arr[i]];
            }
            
        }
    }
    return output.join(' ').trim();
}

console.log(closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854,140,90 ]));