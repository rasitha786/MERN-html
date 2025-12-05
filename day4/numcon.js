// console.log("1"+2);
// console.log("rasi"+8);
// console.log("5"-2);
// console.log("2"*"2");
// console.log("15"/3);
// console.log(true - 1);
// console.log("-----explicit----");
// console.log(Number("786"));
// console.log(Number("abc"));
// console.log(String(123));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean("HI"));
// if("hello") {
//     console.log("hello is true");
    
// }
// console.log(5 == "5");

// console.log(5 === "5");
// let age = 25;
// age = 30; // allow reassign
// console.log(age);

// var age1=24;
// var age1=25; //redeclared
// age1=26; // reassign
// console.log(age1);

/* const age2 = 28;
console.log(age2); */

// console.log(x);
//  var x=10; //hoisting
/* 
function example() {
if(1) {
    var count =10;//anywhere to access& function scope variable
}
console.log(count);
}
example();

function show() {
if(1) {
    let count =10;//blockscope variable
}
console.log(count);
}
show();

function display() {
if(1) {
    var count =10;//blockscope variable
}
console.log(count);
}
display();
 */

//normal function
/* greet();
function greet(){
    let a = 10;
    console.log(a);
    console.log("Konnichiwa");
    
}
 */
//function expression
/* const funExpr = function() {
    console.log("Sayonara");
    
};
 funExpr(); // call after declration */

 //named function expression
/* 
 const namedExpr = function grreting() {
    console.log("Hajimemashite");
    
 };
 namedExpr(); */

 //call back function

/*  function process(callback) {
    console.log("processing..");
    callback();
    
 }
 function done(){
    console.log("task comleted");
    
}
 process(done); */

 //higherorder function
/*  function higherOrder(fun){
    console.log("calling the passed function");
    fun();
 }
 function hi() {
    console.log("hi from call back");
    
 }
 higherOrder(hi);
 */
//arrow function
/* const greet =  function(name) {
    return "Hello" + name;
}

const greetFun = (name) => {
    return "Hello" + name;
};
console.log(greet("RASITHA"));
console.log(greetFun("RASITHA")); */

//arrow function example
/* const add = (a,b) => a + b;
console.log((add(5,3)));

const square =  x => x * x;
console.log(square(4));
 */

//array

/* const fruits = ['apple','mango'];
const newLength = fruits.push('orange');
console.log(fruits);
console.log(newLength);
 */

//and element in the begin
/* const fruit = ['apple','mango'];
const frts = fruits.unshift('orange');
console.log(fruits);
console.log(frts); */

//pop remove element at end
/* const fruits = ['apple','mango'];
const newLength = fruits.pop();
console.log(fruits);
console.log(newLength); */

//shit remove elemet in begin
/* const fruits = ['apple','mango'];
const newLength = fruits.shift();
console.log(fruits);
console.log(newLength); */

//slice method

// const colors=["red","green","blue"];
// let i = colors.length ;

/* let fruit = ["apple", "banana", "cherry", "date"];
let sliced= fruits.slice(1,3);
console.log(fruits);//["apple", "banana", "cherry", "date"]
console.log(sliced);//["banana", "cherry"]
let lasttwo= fruits.slice(-2);
console.log(lasttwo);//["cherry", "date"]

let spliced= fruits.splice(1,2,"mango","kiwi");
console.log(fruits);//["apple", "mango", "kiwi", "date"]
console.log(spliced);//["banana", "cherry"]     
let indexofcherry= fruits.indexOf("cherry");
console.log(indexofcherry);//-1(not found)
let indexofkiwi= fruits.indexOf("kiwi");
console.log(indexofkiwi);//2(found)     
let includesdate= fruits.includes("date");
console.log(includesdate);  //true   
let includesbanana= fruits.includes("banana");
console.log(includesbanana);  //false   
let joined= fruits.join(", ");
console.log(joined);//"apple, mango, kiwi, date"    
let reversed= fruits.reverse();
console.log(reversed);//["date", "kiwi", "mango", "apple"]      
let sorted= fruits.sort();
console.log(sorted);//["apple", "date", "kiwi", "mango"] */
/* 
let numbers = [1,4,7,11,23,45];
let found = numbers.find(num => num > 10);
console.log(found); */

/* let numbers = [1,4,7,11,23,45,82,44];
let found = numbers.filter(num => num%2 == 0);
console.log(found); */

//map

/* let nums=[1,2,3,4];
let doubled = nums.map(n=>n*2);
console.log(nums);
console.log(doubled); */

/* let number=[1,5,8,9,67,50];
let found = number.map(num => num > 10);
console.log(found); */

/* let prices=[200,350];
const addedprice = prices.map(p=>p+100);
console.log(addedprice);
 */
/* 
 let persons = ["kumar","vijay","siva"];
const addmr = persons.map(m=>"Mr."+ m)
console.log(addmr); */

/* let students = [
    {name: "Alice", age: 20,grade: "A"},
    {name: "Bob", age: 22,grade: "B"},
    {name: "Charlie", age: 19,grade: "A"}
];  
let names = students.map(student => student.name);
console.log(names);//["Alice", "Bob", "Charlie"]
let ages = students.map(student => student.age);
console.log(ages);//[20, 22, 19]
let adultStudents = students.filter(student => student.age >= 21);
console.log(adultStudents);//[{name: "Bob", age: 22}]   
let totalAge = students.reduce((sum, student) => sum + student.age, 0);
console.log(totalAge);//61(20+22+19)
let gradeAStudents = students.filter(student => student.grade === "A");
console.log(gradeAStudents);//[{name: "Alice", age: 20,grade: "A"},{name: "Charlie", age: 19,grade: "A"}] */

/* let students = [
    {name: "Alice", marks: 85},
    {name: "Bob", marks: 92},
    {name: "Charlie", marks: 78},
];
let topScorer = students.filter(stu =>stu.marks>80).map(stu => stu.name);
console.log(topScorer);//["Alice","Bob"] */

/* const person = {
    name:"Rasitha",
    age:19,
    city:"tenkasi"
};
for(let key in person) {
    console.log(key, person[key]);
    
} */

    /* let fruits = ["apple","banana","mango","orange"];
    for(let f of fruits)
    {
        console.log(f);
        
    } */
  /*  let names = ["Akira","eren","mikasa"];
   names.forEach(n=>{
    console.log("Hello "+n);
    
   })

   let nums=[20,40,60];
   let total = nums.reduce((sum, current)=>sum+current,0);
   console.log(total);
    */

 //concatenating strings,array

// let numbers = [1, 2, 3];
// let number2 = [4, 5, 6];
// let com = numbers.concat(number2);
// console.log(com);//[1,2,3,4,5,6]

//spread operator

/* let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined);//[1,2,3,4,5,6] */