// Task 01 - access by index

const fruit = ["Apple", "Banana", "Orange", "Mango"]

console.log(fruit[0]);
console.log(fruit.at(-1));
console.log(fruit.length);

// Task 02 - modify array value

const colors = ["Red", "Green", "Blue"];

colors[1] = "yellow"
console.log(colors);

// Task 03 - loop and access

const numbers = [10, 20, 30, 40];

// Print each number

for (let i = 0; i < numbers.length; i++) {
    
    console.log(numbers[i]);

}

// Print square

for (let i = 0; i < numbers.length; i++) {

    console.log(numbers[i] * numbers[1]);

}

// Task 04 - Nested array access

const data = [
  ["Arun", 22],
  ["Ravi", 25],
  ["Kumar", 28]
];

console.log("Ravi's age =",data[1][1]);
console.log("Kumar's name =",data[2][0]);

// Task 05 - array of objects

const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Ravi" }
];

console.log(users[0].name);
console.log(users[1].id);

//Task 06 - basic property Acess

const student = {
  name: "Arun",
  age: 22,
  course: "MERN"
};

console.log("Student name =",student.name);
console.log("Student course =",student.course);

//Task 07 - modify property

const car = {
  brand:'BMW',
  year: 2020
};

car.year = 2024;
car.colour = "black"

console.log(car);

//Task 08 Nested object access

const employee = {
  name: "Ravi",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};

console.log(employee.address.pincode);
console.log(employee.address.city);

//Task 09 - object with array

const property = {
    name:"laptop",
    features:["16GB RAM", "512GB SSD", "i7 Processor"]
};

console.log("second feature =",property.features[1]);
console.log("total feature =",property.features.length);

// Task 10 - array of object 

const students = [
  { name: "Arun", marks: 80 },
  { name: "Ravi", marks: 40 },
  { name: "Kumar", marks: 90 }
];

for (let i = 0; i < students.length;i++){
    if(students[i].marks > 50){
        console.log("High scored student",students[i].name);        
    }
}


