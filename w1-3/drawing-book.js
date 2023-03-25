/* 
n is the number of pages in the book
p is the page we want to be on
first page only has 1 printed on it 
we can turn the pages from front or back
return the minimum number of page we need to turn

we check if p is greater than half of n
we find the number of actual turns possible if there are n pages in a book, for n=1, turn=1
if n even then turns=(n/2)+1
else turns=round(n/2)

for 7 page books 1/2,3/4,5/6,7 is the page order, if we want to go to page 3, p>n/2 is not true so count is p/2 if its even,else floor(p/2) 


1/2,3/4,5/6,7/8
for n even and p>n/2 true  and p is even count is (n-p)/2
for n even and p>n/2 true  and p is odd count is round((n-p)/2)

*/

function pageCount(n, p) {
    // Write your code here

    if(p>n/2)
        return n%2==0? (p%2==0?(n-p)/2:Math.round((n-p)/2)) : (p%2==0?Math.floor((n-p)/2):(n-p)/2);
    
    else 
        return p%2==0?p/2:Math.floor(p/2);
}

console.log(pageCount(5,4));
