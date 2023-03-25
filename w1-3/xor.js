/* 
find xor for two strings of 0 and 1
xor truth table suggests when 1 and 0 or 0 and 1 it outputs 1
same states is false
*/

function strings_xor(s,t){
    let p=[];
    for(let i=0;i<s.length;i++){
        s[i]==t[i]?p.push('0'):p.push('1');
    }
    console.log(p.join().replace(/,/g,''));
}
strings_xor('1111','0100');