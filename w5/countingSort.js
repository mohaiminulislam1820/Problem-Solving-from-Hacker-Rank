

function countSort(arr) {
    // Write your code here
    let halfLength=arr.length/2;
    for(let i=0;i<halfLength;i++)
        arr[i][1]='-';
    let sorted=arr.sort((a,b)=>parseInt(a[0])-parseInt(b[0]));

    console.log(sorted.map(x=>x[1]).join(' '));
}
countSort([['1','ab'],['0','bf']]);