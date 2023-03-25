/* 
a,b two arrays of integers
we need to find number of integers that 
for first array int is a factor
for second array is a factor of
like for 2,6 and 24,36 6 and 12 are factors between them
6%2=0, 6%6=0 24%6=0 36%6=0

less than or equal to 10 members on each array
the members can be 1 to 100
so we find lcm of a and gcd of b that are 100 or less

we can brute force for lcd or gcd

gcd for euclids theorem is we divide the larger number by the small one until remainder is zero, the remainder before is the gcd

*/

function getTotalX(a, b) {
    // Write your code here
let count=0;
const gcdOf2=(x,y)=>{    
    
    let prevRem=x,nextRem,maxA=y;

    while (prevRem){
        nextRem=maxA%prevRem;
        maxA=prevRem;
        if(nextRem==0)
            break;
        else if(nextRem==1)
            return 1;
            
        prevRem=nextRem;

        }

    return prevRem;
    }
    const gcd=(x,gcdFunction)=>{
        if(x.length==1)
            return x[0];
        let prevGcd=gcdFunction(x[0],x[1]),nextGcd;
        if(x.length==2)
            return prevGcd;
        for(let i=2;i<=x.length-1;i++){
            nextGcd=gcdFunction(prevGcd,x[i]);

            if(nextGcd!=prevGcd)
                prevGcd=nextGcd;
        }
        return prevGcd;
    }
    
    const lcm=(x,gcd)=>{
        if(x.length==1)
            return x[0];
        
        for(let i=2;gcd*i<=100;i++){
            let lcmBool=true;
            for(let j=0;j<x.length;j++){
                if((gcd*i)%x[j]!=0 ){
                    lcmBool=false;
                    break;
                }
                   
            }
            
            if(lcmBool==true)
                return gcd*i;
        }
        return 0;
    }
    
    const gcdA=gcd(a,gcdOf2);
    const gcdB=gcd(b,gcdOf2);
    const lcmA=lcm(a,gcdA);

    if(gcdB<lcmA ||lcmA==0)
        return 0;
    else if(gcdB%lcmA==0 && gcdB!=lcmA)
        count+=2;
    else if(gcdB==lcmA){
        count++;
        return count;
    }


    const factorsOfLcmAThatRemainders0ForgcdB=(x,y)=>{

        for (let i=2;x*i<=y/2;i++){
            if(y%(x*i)==0){
                count++;
            }
        }
    }
    factorsOfLcmAThatRemainders0ForgcdB(lcmA,gcdB)
    return count;
}


console.log(getTotalX([100,99,98,97,96,95,94,93,92,91],[1,2,3,4,5,6,7,8,9,10]));