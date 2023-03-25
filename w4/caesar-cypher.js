/* 
input s is string k is integer value
add the key to the value of alphabets only and return the encrypted string

doing this with c would be very easy just casually adding the key 

charCodeAt method gives us the ascii value of strings;
String.fromCharCode() turns the char code back into string

*/

function caesarCipher(s, k) {
    // Write your code here
    let output='';
    k=k%26;
    const length=s.length;
    for(let i=0;i<length;i++){
        let charCode=s[i].charCodeAt();
        if(charCode>=65 &&charCode<=90){
            if(charCode+k>90){
                output+=String.fromCharCode(64+charCode+k-90);
            }
            else if(charCode+k<65){
                output+=String.fromCharCode(89+65-charCode-k);
            }
            else{
                output+=String.fromCharCode(charCode+k);
            }
        }
        else if(charCode>=97 &&charCode<=122){
            if(charCode+k>122){
                output+=String.fromCharCode(96+charCode+k-122);
            }
            else if(charCode+k<97){
                output+=String.fromCharCode(121+97-charCode-k);
            }
            else{
                output+=String.fromCharCode(charCode+k);
            }
        }
        else{
            output+=s[i];
        }
    }
    return output;
}

console.log(caesarCipher('middle-Outz',2));
