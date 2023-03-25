/* two words are anagram  if their letters can be rearranged to form the other word 
output is minimum number of characters to change to make the split words anagrams
if string length is odd return -1

first split the string 
replace left string char with empty string if 
*/



function anagram(s) {
    // Write your code here
    if(s.length%2==1)
        return -1;
    let halfLength=s.length/2,count=0;

    let left=s.slice(0,halfLength);
    let right=s.slice(halfLength);
  
    
    for(let i=0;i<halfLength;i++){
        left=left.replace(right[i],'')
    }
    
    return left.length;

}
let a=''

for(let i=0;i<9999999;i++){
    a+='hhpddlnndfsjfoyxpciioigvjqzfbpssujhhpddlnnsj';
}

console.log(a.length);