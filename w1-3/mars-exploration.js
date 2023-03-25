/* 
the input string will contain a stream of SOS, if any of them is changed count++
return count
if i=0,2,3,5,6,8 then they have to be S // i=0
if i=1,4,7,10 then they have to be O // i=1,i+=3
*/

function marsExploration(s) {
    // Write your code here

    let count=0;
    for(let i=1;i<s.length;i+=3){
        if(s[i]!='O')
            count++;
        
        if(s[i-1]!='S')
            count++;
        
        if(i+1< s.length && s[i+1]!='S')
            count++;
    }
    return count++;
}

console.log(marsExploration('SPSSQSSORSOSSOS'));
