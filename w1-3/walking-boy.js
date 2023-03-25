/* doggy wants to walk twice a day
walking doggy requires 120 consecutive minutes
two walks cannot overlap
one can start after another
input- first line is test case number 
every next two lines first has number of messages sent by judge
judge cant send message during walking the boy
each day has 1440minutes, the second line contains the minutes at which judge sent message
output is "YES""NO" if you walked doggy two times

solve:
have to style the input into arrays first
split by new line first

after we have the proper input data of minutes in an array 
we will check if the difference between the sorted minute differences divided by 120 is equal or greater than 2,count+=2,if difference divided by 120 equal or greater than 120 walked count++ if count==2 then break

we will need to add 1440 to every test case of minutes to check edge cases where doctor doesnt send messages very often leaving plenty of time in the day to send messages

outside loop if count==2 return "YES" else return "NO"
 */

function doggyWalked(input){
    const inputArray=input.split('\n');
    const testCaseNo=inputArray.shift();
    let output='';
    for (let i = 0; i < testCaseNo*2; i++) {
        if(i%2==1){
            const inputMinutes=inputArray[i].split(' ');
            inputMinutes.push(1440); 

        let count=0;
        
        for(let j=0;j<inputMinutes.length-1;j++){
                
                if((parseInt(inputMinutes[j+1])-parseInt(inputMinutes[j]))/120>= 2)
                    count+=2;
                else if((parseInt(inputMinutes[j+1])-parseInt(inputMinutes[j]))/120>= 1)
                    count++;

                if(count==2)
                    break;
            }
        if(count==2)
            output+='YES'+'\n';
        else
            output+='NO'+'\n';
            
        }
        
    }
    return output.trim();

}

console.log(doggyWalked(`6
14
100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400
12
100 200 300 400 600 700 800 900 1100 1200 1300 1400
13
100 200 300 400 500 600 700 800 900 1100 1200 1300 1400
13
101 189 272 356 463 563 659 739 979 1071 1170 1274 1358
1
42
5
0 1 2 3 4`));