/* 
two kangaroos
-kangaroo one starts at x1 position and moves at v1 meters/jump
-kangaroo 2 starts x2 and moves at v2 meters/jump
return YES if they can be at the same position at any point of their jumping after starting else NO 
if v1=v2  return NO

if x1+v1>x2+v2  return NO

brute force solution - we multiply v1 and v2 with i and check if x1+v1*i==x2+v2*i, i

*/

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
if(v1==v2)
    return "NO";
else if( v1<v2)
    return "NO";
else if(v1<v2 && v1+x1<v2+x2)
    return "NO";
else if(v1>v2 && v1+x1>v2+x2)
    return "NO";
if(x1+v1<x2+v2){
    for(let i=1;x1+v1*i<=x2+v2*i;i++){
        if(x1+v1*i==x2+v2*i)
            return "YES";
    }
}
else{
    for(let i=1;x1+v1*i>=x2+v2*i;i++){
        if(x1+v1*i==x2+v2*i)
            return "YES";
    }
}

return 'NO';
}

console.log(kangaroo(21,6,47,3));