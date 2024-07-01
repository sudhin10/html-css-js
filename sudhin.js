console.log("hi welcome java");

let g=23;
var x=false
var y="mango"
var z=5
{
    
    let g=34;
    console.log(g)

}

console.log(x)
console.log(typeof(x))
console.log(typeof(y));
console.log(typeof(z))
let person=
{
name:'sudhin',
age:23,
location:'tvm'}
console.log(person.name);
let arr=['maya',23,'jaya']
console.log(arr.length)
function add(a,b) {
    var sum=a+b;
  
    return sum;
}
let result=add(30,20);
console.log(result)
var a=1;
var b=++a;
console.log(a);
console.log(b);
var a1=99;
var a2='99';
if (a1>a2)
    {
 console.log("a1 is greater")
}
else if (a1==a2)
{
    console.log("equal and the value is "+a1)
}
else{
    console.log("a2 is greater")
}
var arr2=[10,20,30,50]
for (let i = 0; i< arr2.length; i++) 
    console.log(i)
for (const i of arr2){
    console.log(i)
}