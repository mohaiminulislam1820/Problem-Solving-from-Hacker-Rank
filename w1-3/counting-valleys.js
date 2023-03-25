/* 
a mountain is sequence of consecutive steps of above sea level, starting with a step up from sea level and ending with a step down to sea level
a valley is a sequence of consecutive steps below sea level and ending with a step up reaching sea level

steps is no of steps,path is sequence of U,D in string
we will need to track sea level from inital 0, if path[i]=U then sealevel++ else sealevel--
then if sealevel=-1 temp=i
if sealevel==0 and i-temp>=1 output++
*/

function countingValleys(steps, path) {
    // Write your code here
    let seaLevel=0;
    let output=0;
    let temp;
for(let i=0;i<steps;i++){
    
    if(path[i]=='U')
        seaLevel++;
    else 
        seaLevel--;
    
    if(seaLevel==-1)
        temp=i;
    if(seaLevel==0 && i-temp>=1) {
            output++;
            temp=undefined;
        }
}
return output;
}
console.log(countingValleys(10,"DUDDDUUDUU"));
