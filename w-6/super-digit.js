/* 
if input has only 1 digit then its super digit is that digit, otherwise sum all the digits of that number until there is one digit and that is the super digit we need to return

input n is the string number and k is the times that string needs to be concatenated to get the real string number

we can turn the number into string and parse int for doing it in a loop

or divide it by 10 to see until division is greater than 10
*/

function superDigit(n, k) {
    // Write your code here
    let num=0;
    //first find the sum of digits of n string
    for(let i=0;i<n.length;i++)
        num+=parseInt(n[i]);
    //multiply it by k to get the superdigit of the first iteration
    num=num*k;

    //we run a double loop to find superdigits until it is reduced to 1 digit
    while(num/10>=1){
        let superDigit=0;
        while(num/10>=1){
            superDigit+=num%10;
            num=Math.floor(num/10);
        }
        superDigit+=num;
        console.log(superDigit)
        num=superDigit;
    }
    return num;
}

console.log(superDigit('9875',4))