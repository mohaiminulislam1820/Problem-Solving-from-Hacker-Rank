function cartesianProduct(arrA,arrB){

    let result=[];
    for(let i=0;i<arrA.length;i++)
    {
        for(let j=0;j<arrB.length;j++)
        result.push([arrA[i],arrB[j]]);
    }
    return result;
}
console.log(cartesianProduct([1,2],[2,3,4]));