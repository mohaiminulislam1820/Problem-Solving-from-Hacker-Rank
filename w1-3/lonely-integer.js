//find the number in the array which occurs only once, array length will be odd,array is not sorted
/* 
brute force way is to check every element in a double loop and count the match, if count>0 break the second loop ,if count=0 at the end in first loop return the value;
*/

function lonelyinteger(a) {
    // Write your code here
for(let i=0;i<a.length;i++){
    let count=0;
    for(let j=0;j<a.length;j++){
        if(i!=j){
            if(a[i]==a[j])
                count++;
            if(count>0)
                break;
        }
        }    
        if(count==0)
        return a[i];
    }
    
}


console.log(lonelyinteger([1,2,3,4,3,2,1]))