/* 
input is grades array of numbers
grades have to be rounded
if the difference between teh grade and next multiple of 5 is less than 3, round grade up to the next multiple of 5
if the value of grade is less than 38, it will be a failure so no need to round below 38 #1 condition check
have to find the next multiple of 5 for any grade problem#1
then if the diffrence is between the two is less than 3 it will be changed to that multiple of 5
if grade%5==0 then no round up and no operation
multiple of 5 is = Math.ceil(grade/5)


*/

function gradingStudents(grades) {
    // Write your code here
let gradeRounded=grades.map(grade=>{
    if(grade>37){
        let multipleOf5=Math.ceil(grade/5);
        if((5*multipleOf5-grade)<3)
            return 5*multipleOf5;
        else 
            return grade;
}
return grade;
})
    return gradeRounded;
}

console.log(gradingStudents([34,45,23,57,98]));