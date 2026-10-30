const { object } = require("prop-types");

let ev = [];
const employee = {
    name: "Ravi",
    role: "Developer",
    experience: 2
};
function even(numbers) {
    for(const num of numbers){
        if(num%2 == 0){
            ev.push(num);
        }
    }
    return ev;
}
function calculate_sum(){
    let sum = 0
    for(let i=1 ; i<=5 ; i++){

        sum = sum + i

    }
    return sum;
}
function print_ob(employee){
    for(let key in employee)
    {
        console.log(`${key}:${employee[key]}`)
    }
}
function multiply(a,b){
    return a*b;
}
const numbers = [100,20, 30, 40, 50];
const result = numbers.map(num => num*3);
const employees = [
    { name: "Ravi", salary: 30000 },
    { name: "Priya", salary: 40000 },
    { name: "Arun", salary: 50000 }
];
// const sal = employees.map(emp => emp.salary + 5000);
const rel =numbers.splice(-6);//[100,20, 30, 40, 50] copy the same
const rel1 =numbers.slice(3);//start from 3 to end [40,50]
const rel2 = numbers.slice(1,3);//start from 1 to 2 [20,30]
const rel3 = numbers.slice(-2);//last 2 elements
// console.log(numbers)
// console.log(sal);
// console.log(result);
// console.log(numbers);
// const res = numbers.forEach(num => {
//     console.log(num*2);
// })
// console.log(even(numbers))
// console.log(calculate_sum())
// console.log(multiply(4,5))
// console.log(print_ob(employee))


// Create a function that calculates final price:
// Rules:
// If price > 1000 → 10% discount 
// If price > 500 → 5% discount 
// Otherwise no discount 
// Requirements
// Use ternary operator 
// Use arithmetic operators 
// calculatePrice(1200) // 1080

const calculatePrice =
    price => price > 1000
        ? price - price * 10 / 100
        : price > 500
            ? price - price * 5 / 100
            : price;

// console.log(calculatePrice(1200)); // 1080

// Check whether a number is even or odd.
// Requirements
// Use % operator 
// Return string: "Even" or "Odd" 

const even_odd = 
    num => num%2 === 0 ? "Even" : "Odd" ;
// console.log(even_odd(0));


// User can login if:
// username === "admin" AND password === "1234" 
// OR
// role === "superadmin" 
// Requirements
// Use && and || 


const login =
     (username , password , role) =>
        (username === "admin" && password === "1234" ) || role === "superadmin" ? "Login success" : "Login failed";
// console.log(login("admin","12345","superadmin"))

// Find largest among 3 numbers.
// Requirements
// Use comparison operators (>) 
// No Math.max() 

const largest =
    (a,b,c) => a <b ? 
    (a > c ? a : c): (b > c ? b : c ) ;
// console.log(largest(60,60,30));

// Assign grade:
// = 90 → A
// = 75 → B
// = 50 → C
// < 50 → Fail 
// Requirements
// Use nested ternary operator 

const grade = (num)   => 
    num === 90 ?
        "A" : num === 75 ?
                "B" : num === 50 ?
                        "c" : num < 50 ?
                                "Fail" : "No grade mentioned";
// console.log(grade(40))

// Print user name if available, else "Guest"
// let userName = "";
// Expected:
// Guest
// Requirements
// Use || operator (short-circuit) 

let userName = ""
// console.log(userName || "Guest");


// Access city safely:
// const user = {
//   address: {
//     city: "Pune"
//   }
// }
// Requirements
// Use ?. 
// Avoid error if property missing 


const user = {
  address: {
    city: "Pune"
  }
};
// console.log(user?.address?.city || "Unknown")


// Set default salary:
// let salary = null;
// Output:
// 50000
// Requirements
// Use ?? 
// Do NOT use || 

let salary = null;
// console.log(salary ?? 50000)
        
// Create a counter:
// Increase value 
// Decrease value 
// Requirements
// Use ++ and – 


function createCounter() { 
     let count = 0; 
    return  {
       increase : () => ++count ,
       decrease : () => --count
    }  ;
    }

const counter = createCounter();
// console.log(counter.decrease());
// console.log(counter.increase())


// Write a function:
// function checkType(value) {}
// Requirements
// Return:
// "string" 
// "number" 
// "boolean" 
// "object" 
// "array" 
// Hint
// Use typeof and Array.isArray()


function checkType(value){
    if(Array.isArray(value)){
        return "array";
    }
    return typeof value;
}
// console.log(checkType("hey"));
// console.log(checkType(true));
// console.log(checkType([1,2,"12"]));

// Store user form data:

// Task
// Try updating age 
// Try reassigning whole object ---cannot reassign const variable --> it gives type error--we can the preperty of it
// Explain behavior of const

// const users = {
//   name: "Vivek",
//   age: 30
// };
// users.age = 25
// console.log(users)

// Simple Calculator (switch)
// Problem
// Create a calculator:
// calculate(10, 5, "+") // 15
// Requirements
// Use switch 
// Support: 
// +, -, *, / 
// Return result 

function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            return b !== 0 ? a / b : "Cannot divide by 0";

        default:
            return "Invalid calculation";
    }
}
// console.log(calculator(10,10,"/"))


// Problem
// Find sum of digits:
// sumDigits(1234) // 10
// Requirements
// Use while loop 

function sumDigits(num){
    var dig;
    var sum = 0;
    while (num > 0) {
        dig = num%10;
        sum = sum + dig;
        num = Math.floor(num/10);
    }
    return sum ;

}
// console.log(sumDigits(12053))


//  Assignment 5: Reverse Number (do-while)
// Problem
// Reverse a number:
// reverse(1234) // 4321
// Requirements
// Use do-while 
function reverse(num){
    var rev = 0;
    var dig = 0;
    do{
        dig = num%10;
        rev = rev*10 + dig;
        num = Math.floor(num/10);
    }while(num>0);
    return rev;
}
// console.log(reverse(123));

// Problem
// Count vowels in string:
// countVowels("javascript") // 3
// Requirements
// Use for...of 

function vowelsCount(str){
    var s = str.toLowerCase();
    var c = 0;
    for(const i of s){
        c = ("aeiou".includes(i)) ? c+1 : c;
    }
    return c;
}
// console.log(vowelsCount("AaC"))

// Problem
// const user = {
//   name: "Vivek",
//   age: 35,
//   city: "Pune"
// };
// Print:
// name : Vivek
// age : 35
// city : Pune
// Requirements
// Use for...in 

// const userss = {
//   name: "Vivek",
//   age: 35,
//   city: "Pune"
// };
// for(const i in userss)
// {
//     console.log(i + " : " + userss[i]);
// }


// Problem
// Find first even number in array:
// findEven([1,3,5,6,7]) // 6
// Requirements
// Use loop 
// Use return to exit early 


function firstEven(num){
    for(var i of num){
        if (i%2 === 0){
            return i;

        }
    }      
      return "There is no even number in the array";

}
// console.log(firstEven([4,10]));

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// var s = "*";
// for(let i= 1 ; i<5 ; i++){
//    console.log(s);
//    s = s + "*";
// }

// Understand the difference between shallow copy and deep copy.
// Requirements
// Create an object:
// const student = {
//  name: "Vivek",
//  age: 30,
//  address: {
//    city: "Pune",
//    state: "Maharashtra"
//  }
// };
// Tasks
// Create:
// Shallow copy using spread operator
// Deep copy using JSON.parse(JSON.stringify())
// Modify:

//  copiedStudent.address.city = "Mumbai";


// Print:
// Original object
// Shallow copied object
// Deep copied object
// Expected Learning
// Nested objects share reference in shallow copy
// Deep copy creates independent nested objects
// const student = {
//  name: "Vivek",
//  age: 30,
//  address: {
//    city: "Pune",
//    state: "Maharashtra"
//  }
// };

// const student_copy = {...student};
// const student_deepcopy = JSON.parse(JSON.stringify(student));
// console.log(student_copy);
// console.log(student_deepcopy);
// student_copy.address.city = "Hyderabad";
// student_copy.name = "srija";
// console.log(student.name);
// console.log(student_copy.name);
// console.log(student.address.city);
// console.log(student_copy.address.city);
// student_deepcopy.address.state = "Telangana"
// console.log(student.address.state);
// console.log(student_deepcopy.address.state);


// function customDeepClone(value, seen = new WeakMap()) {

//     if (value === null || typeof value !== "object") {
//         return value;
//     }

//     if (value instanceof Date) {
//         return new Date(value);
//     }

//     if (seen.has(value)) {
//         return seen.get(value);
//     }

//     if (Array.isArray(value)) {
//         const copy = [];

//         seen.set(value, copy);

//         for (const item of value) {
//             copy.push(customDeepClone(item, seen));
//         }

//         return copy;
//     }

//     const copy = {};

//     seen.set(value, copy);

//     for (const key in value) {
//         copy[key] = customDeepClone(value[key], seen);
//     }

//     return copy;
// }

function greet(name = "Guest"){
    return `Hello ${name}`;
}
// console.log(greet("srija"))
// console.log(greet())

// ✅ Assignment 3: Salary Bonus Calculator
// Problem
// Calculate final salary:
// Rules:
// Default bonus = 5000 
// If performance is "excellent", add 10000 
// Requirements
// Use default parameters 
// Use ternary operator 

function sal(performance,sal = 7000){
    const bonus = performance === "excellent" ? 10000 : 5000;
    sal = sal + bonus;
    return sal;
}
// console.log(sal("bad",30000))

// ✅ Assignment 4: Anonymous Function Assignment
// Problem
// Store anonymous function in variable:
// const square = function(num) {}
// Requirements
// Return square of number 

const square = (num) => num*num ;
// console.log(square(5))

const person = {
    name: "Srija"
};

// greet.call(person);

// ✅ Assignment 13: Function Parameter Validation
// Problem
// Validate input:
// divide(a,b)
// Rules
// If b = 0 return: 
// Cannot divide by zero

function divide(a,b){
    return b !== 0 ? a / b : "Cannot divide by 0";
}
// console.log(divide(100,0))

// ✅ Assignment 15: Shopping Cart Total
// Problem
// cartTotal(100,200,300)
// Requirements
// Use rest parameters 
// Return total 
function cartTotal(...a){
    return a.reduce((sum,num)=> sum+num , 0);
}
// console.log(cartTotal(10,20))


function double(value){
    return value.map((num)=>num+num)
}
// console.log(double([1,2,3,4,5]))

function upper(value){
    return value.map((str)=>str.toUpperCase())
}
var arr = ["vivek","rahul","amit"];
// console.log(upper(arr))
// console.log(arr)

// Problem
// Input:
// const users = [
//  {id:1,name:"Vivek"},
//  {id:2,name:"Rahul"},
//  {id:3,name:"Amit"}
// ];
// Output:
// ["Vivek","Rahul","Amit"]
// Requirements
// Use map()
// Extract only names
const users = [
 {id:1,name:"Vivek"},
 {id:2,name:"Rahul"},
 {id:3,name:"Amit"}
];
// console.log(users.map((u)=>u.name))

// Input:
// const products = [
// {name:"Laptop",price:50000},
// {name:"Mobile",price:20000}
// ];
// Output:
// [
// "Laptop - ₹50000",
// "Mobile - ₹20000"
// ]
// Requirements
// Use template literals
// Use map()
const products = [
{name:"Laptop",price:50000},
{name:"Mobile",price:20000}
];

console.log(products.map((p)=>`${p.name} - ${p.price}`))
const arr1 = [1,2,3,4]
// console.log(arr1.filter((arr)=>arr%2==0));

const users1 = [
{name:"Vivek",active:true},
{name:"Rahul",active:false},
{name:"Amit",active:true}
];
console.log(users1.filter((users)=>users.active == true))

// Search Names Starting with A
// Problem
// Input:
// ["Amit","Rahul","Ankit","Vivek"]
// Output:
// ["Amit","Ankit"]
// Requirements
// Use filter()
// Use startsWith()
const names =["Amit","Rahul","Ankit","Vivek"];
// console.log(names.filter((name)=>name.startsWith("A")))

// Student Result System
// Input:
// const students = [
// {name:"Vivek",marks:80},
// {name:"Rahul",marks:35},
// {name:"Amit",marks:90}
// ];
// Tasks
// 1 Filter students with marks > 40
//  2 Convert names to uppercase using map()
// Expected Output:
// ["VIVEK","AMIT"]
const students = [
{name:"Vivek",marks:80},
{name:"Rahul",marks:35},
{name:"Amit",marks:90}
];
// console.log(students.filter((stud)=>stud.marks>40).map((stud)=>stud.name.toUpperCase()))

const namess = ["Amit", "Rahul"];

const upperNames = namess.map(name => name.toUpperCase());

console.log(upperNames);
console.log(namess)