// Use .map() to convert an array of numbers into their squares.

const num = [2,3,4,5,6,7];

const square = num.map((num)=>num*2);

console.log(square);

// Use .filter() to return only even numbers from an array.

const Num = [1,2,3,4,5,6,7,8];

const even = Num.filter((num)=>num % 2 == 0)

console.log(even);

// Use .reduce() to find the sum of all elements in an array.

const number = [1,2,3,4,5];

const sum = number.reduce((a,b)=>a+b,0)

console.log(sum);

// Explain the difference between == and === with examples.

console.log(1 == "1"); // true because eqaulity checks the value only not data types
console.log(1 === "1"); // false because loose eqaulity checks the value and data type

// Write a function to reverse a string without using .reverse().

function reversestring (str){
    let reverse =""
    for ( i = str.length -1; i >= 0;i--){
        reverse+=str[i]
    }
    return reverse
}
console.log(reversestring("hello"));


// Remove duplicate values from an array using JavaScript methods.

function duplicate (num){
    let remove = [...new Set(num)]//new is keyword,return a new object. And set is store a unquie value.
    return  remove
}
console.log(duplicate([2,3,4,5,6,7,8,4,3,5,6,7]));


// Check whether a given string is a palindrome or not.

const palindrome = "madam"

if (palindrome.split("").reverse().join("") === palindrome){
    console.log(true);
    
}
else{
    console.log(false);
    
}

// Count the occurrence of each character in a string.

function occurrence(str){
    let count =[]
    for(let char of str){
      count[char] = (count[char] || 0 )+ 1
      
    }
    return count
}
console.log(occurrence("hello"));

// Sort an array of objects based on a specific property (like age).

const user = [
    {name:"swathi",age:20},
    {name:"aswitha",age:23},
    {name:"nithya",age:22}
]

const filter = user.sort((a,b)=>a.age-b.age)

console.log(filter);
