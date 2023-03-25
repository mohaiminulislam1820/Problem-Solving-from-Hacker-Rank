/* 
multi line input
first line gives no of ints
next lines will be the int
integer can be 2^32
task is to flip the 32 bits binary of the integer and print that binary
*/

function unsignedToSigned(n){
const inputArray=n.split('\n');

const [no,...inputs]=inputArray;

let output='';
for(let i=0;i<no;i++)
{
inputNumber=parseInt(inputs[i]).toString(2).padStart(32,'0');
const placeholderFor1=inputNumber.replace(/1/g,'z');
const flippedZeroOnPlaceholder=placeholderFor1.replace(/0/g,'1');
const unsignedBinary=flippedZeroOnPlaceholder.replace(/z/g,'0');
output+=parseInt(unsignedBinary,2)+'\n';


}
return output.trim();
}
console.log(unsignedToSigned(`3
2147483647 
1 
0`))