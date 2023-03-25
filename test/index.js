const test=document.getElementById('test');

const loadData=async () => {
    console.log('hello')
const data=await fetch(`json/DATA.json`);
const result= await data.json();
console.log(result)
}
test.addEventListener('click',async () => {
    console.log('hello')
const data=await fetch(`json/data.json`);
const result= await data.json();
console.log(result)
})