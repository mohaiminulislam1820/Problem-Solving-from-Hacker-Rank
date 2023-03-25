/* There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results. */
//input will need to be split by newline
//first line will give the string size
//next string size lines will contain the strings
//then the query string size
//next query size lines will contain the queries
//double for loop
//have to check string matches with queries
/* match will be count ++ for that query
output array will be same size as query array
 */

function matchingStrings(strings, queries) {
    // Write your code here

    let arr=[];
    arr.length=queries.length;
    for(let i=0;i<queries.length;i++){
        arr[i]=0;
        for(let j=0;j<strings.length;j++){
            if (strings[j]===queries[i]) {
                arr[i]++;
            }
        }
    }
    return arr;
}
console.log(matchingStrings(["aba","baba","aba","xzxb"],["aba","xzxb","ab"]));