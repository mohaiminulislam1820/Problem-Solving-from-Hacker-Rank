/* 
louise starts first 
whoever reduces input n to 1 is winner
return winner name
each turn they see if it is a power of 2 if it is divide it by 2, if not reduce to a lower number which is a power of 2 and pass the number which was substracted to make it a power of 2 to the next player
if input is 1 richard wins


*/

function counterGame(n) {
    // Write your code here
    if(n==1)
        return "Richard";
    let count=0;
    while(n>1){
        //rather than using this loop power2 we can use Math.log2() function to directly get the power, there are other log functions in math js
        let power2=2;
        while(power2<n){
            if(power2*2>n)
                break;
            power2*=2;
        }
        if(n==power2)
            n/=2;
        else{
            n-=power2;
        }
        count++;
    }
    return count%2==1?'Louise':"Richard";
}
console.log(counterGame(132))