/* 
input password string, n password length
[a-z], [A-Z], [0-9], or [!@#$%^&*()-+ ] password chars
password length has to be at least 6
has to contain at least one digit
has to contain at least one lowercase english char
has to contain at least one lowercase english char
has to contain at least at least one special character.

check the string in a loop for the four cases if it satisfies a case then remove the array member
const numbers="0123456789"

*/

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let numbers = "0123456789",lower_case = "abcdefghijklmnopqrstuvwxyz",upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",special_characters = "!@#$%^&*()-+",count=4;
    for(let i=0;i<n;i++){
        if(count==0)
            break;
        if(numbers){
            if(numbers.includes(password[i])){
                numbers=false;
                count--;
            }
        }

        if(lower_case){
            if(lower_case.includes(password[i])){
                lower_case=false;
                count--;
            }
        }

        if(upper_case){
            if(upper_case.includes(password[i])){
                upper_case=false;
                count--;
            }
        }

        if(special_characters){
            if(special_characters.includes(password[i])){
                special_characters=false;
                count--;
            }
        }
    }

    return n<6?(count<6-n?6-n:count):count;

}

console.log(minimumNumber(3,'Ab1'));