/* 
the string s is numerical, it can be split into a[1], a[2]...a[n] where a[i]-a[i-1]=1
no a[i] has a leading zero(01,020)
the string can not be sorted

if the satisfies the conditions print YES x\n where x is the first number of increasing sequence
else print NO\n

solved using reverse engineering a beautiful array using first 1 to length/2 digits then comparing the actual number to see if they match
*/

function separateNumbers(s) {
    // Write your code here
let x=1;

const newBeautiful=(s,x)=>{
    if(x>s.length/2){
        return "NO";
    }
    let j=0,limit=s.length/x,newS='';
    for(let i=BigInt(s.slice(0,x));j<limit;i++,j++){
        if(newS.length>=s.length)
            break;
        newS+=i;

    }

    console.log(newS,s,"\n")
    if(newS==s )
        return `YES ${s.slice(0,x)}`;
    
    else 
        return newBeautiful(s,x+1)
            
}
    console.log(newBeautiful(s,x))
}

separateNumbers('42949672954294967296429496729');