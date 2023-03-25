/* 
pangram is a string that contains every letter of the alphabet
return 'pangram','not pangram'
*/

function pangrams(s) {
    // Write your code here
    let freq=[];
    for(let i=0;i<26;i++){
        freq[i]=String.fromCharCode(i+97);
    }
    for(let i=0;i<s.length;i++){
        if(s[i].toLowerCase()==freq[freq.indexOf(s[i].toLowerCase())]){
            freq[freq.indexOf(s[i].toLowerCase())]=1;
        }
    }
    const required=freq.reduce((sum,x)=>sum+x,0);
    if(required==26)
        return 'pangram';
    else
        return 'not pangram';
}
console.log(pangrams('the quick brown FOX jumps over the lazy dog'));
