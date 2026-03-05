// 1.Declare three variables using var, let, and const. Store your name, age, and a boolean value.

const Name = "swathi";
let Age = 20;
Age = 21;
var isStudent = true;

console.log("Name:", Name);
console.log("Age:", Age);
console.log("Is Student:", isStudent);

// 2.Declare a variable without assigning a value. Print it. Then assign null to another variable and print it.

let x;
console.log(x);

let y = null;
console.log(y);

//3.Data Types

//string
let Str = "String";

//Number
let Num = 101;

//Bollean
let BooleanValue = true;

//Bignit
let bigNumber = 1234567890123456789012345678901234567890n;

//Null
let emptyValue = null;

//Undefined
let notAssigned;

// Print typeof for each
console.log("String:", typeof Str);
console.log("Number:", typeof Num);
console.log("Boolean:", typeof BooleanValue);
console.log("BigInt:", typeof bigNumber);
console.log("Null:", typeof emptyValue);
console.log("Undefined:", typeof notAssigned);

//4.Two variables 

let value1 = "10";
let value2 = "hello";

console.log(value1 * 2);
console.log(value2 * 2);// returns not a number

//5.convert the text

/* studentName = camelcase
   StudentName = pascalcase
   student_name = snakecase
   student-name = kebabcase */

//6.calculation arithmetic operators

let num1 = 10;
let num2 = 15;

console.log("Add value =",num1+num2);
console.log("Sub value =",num1-num2);
console.log("Multiply value =",num1*num2);
console.log("Division value =",num1/num2);
console.log("modulus value =",num1%num2);

//7.variable with value

let num_1 = 10;

num_1 += 5;
console.log("After +=5:",num_1); // 10 + 5 = 15

num_1 -= 3;
console.log("After -=3:",num_1); // 15 - 3 = 12

num_1 *= 4;
console.log("After *=4:",num_1); //12 * 4 = 48

num_1 /= 5;
console.log("After /=5:",num_1); //48 % 5 = 9.6

//8.comparison operators

console.log(10 == "10");   // true  → values are equal
console.log(10 === "10");  // false → value same but type different
console.log(10 != "10");   // false → values are equal
console.log(10 !== "10");  // true  → type is different

//9.condition check

let userAge = 20;
let hasId = true;

if (userAge > 18 && hasId){  // && and
    console.log("Eligible");    
}else if (userAge < 18 || !hasId ){  // || 0r
    console.log("Not eligible");
    
}

//10.output

var a;
console.log(a); // undefined // we did not assign it

a = 5;
console.log(a); //5  // its in gobal scope

console.log(typeof NaN); //Number
console.log(typeof null); //object  







