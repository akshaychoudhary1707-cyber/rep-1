var x=5;
console.log(x)

var x=5;
var y=10;
console.log("x is ",x," and y is ",y)

console.log("addition of x and y is ",x+y)
console.log("subtraction of x and y is ",x-y)
console.log("multiplication of x and y is ",x*y)
console.log("division of x and y is ",x/y)
console.log("modulo of x and y is",x%y)

console.log("Types of variable in javascript:- ")
var a=20;
let b=30;
const c=40;
console.log("var and let and constant that being ",a,b,c)

//let num=100;
//let str="hello world";
//let und;
//let nul=null;
//let bool=true;

b=900;
console.log("let b =",b)

d=100;
console.log("value of d is ",d)

var name="Aditya";
for(var i=0;i<name.length;i++){
    console.log(name[i])
}

console.log("lets use arrow function")
const multiply=(p,q)=>p*q;
console.log("arrow function",multiply(5,5));

console.log("lets use array and print its elements:- ")
let arr=[10,20,30,40,50];
console.log("original array is:- ")
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
arr.push(70);
console.log("array after pushing 70 is :- ",arr)

let today=new Date();
console.log(today)

console.time("test");
for(var i=0;i<10000;i++){}
console.timeEnd("test");

let students={
    name:"Aditya",
    age:20,
    course:"B-tech"
}
console.log(students)

console.count("a")
console.count("a")
console.count("a")
console.count("b")
console.count("b")
console.count("a")

let student={name:"vikas",age:20}
console.table(student)