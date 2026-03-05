// 1.Pop & Push

const cart = []; // empty array

const Add = cart.push("apple","orange","mango");//Add items

console.log(Add); // No.of items add
console.log(cart); //Added items
const removedItem = cart.pop(); // remove last item

console.log(cart);// remaining items
console.log(removedItem); // removed item

// 2.shift & unshift

const num = [10,20,30,40]
const removedNum = num.shift(); // remove first item
console.log(num); // remaining items
console.log(removedNum); // removed item
const addNum = num.unshift(5); // Add 
console.log(num);  // added item
console.log(addNum);// total index

// 3.inculdes()

const skills = ["java","python","react","node.js"]

const check = skills.includes("react",2)

console.log(check);

// 4.Slice()

const number = [1,2,3,4,5]

const cutElement = number.slice(1,4); // cut the middle value

console.log(cutElement); // cutted value
console.log(number);// it does not affect the original value 

// 5.splice

const Num = [1,2,3,4,5]

console.log(Num); // original not affected

const cutAdd = Num.splice(2,2,100,200)

console.log(cutAdd); // cutted items

console.log(Num); // replace

// 6.Concat

const a = [1,2]
const b = [3,4] 
const merge = a.concat(b);
console.log(merge);

// 7.Join()

const seperate = ["JS", "React", "Node"];
const result = seperate.join("-")
console.log(result);

// 8.sort

const value = [3057,2,505,6,404,505]

const ass = value.sort((a,b)=>a-b);
console.log(ass); // ascending order

const desc = value.sort((a,b)=>b-a);
console.log(desc);

// 9.Reverse

const input = [1,2,3,4,5,6]

console.log(input); // original value

const opp = input.reverse()

console.log(opp); // reverse

// 10.Idex 

const id = [3,4,5,7,2,5,8]

const final = id.indexOf(4,0)!==-1 ? "find" : "not found";

console.log(final);

// Higher order methods

//11.map()

const arr = [1,2,3,4]

const multipy = arr.map((num) => num*2) // multipy the each element

console.log(multipy);

//12.object ()map()

const object = [
 { name: "Sudhan", age: 22 },
 { name: "Ravi", age: 25 }
]

const name = object.map((obj)=>obj.age) //obj valued the object value

console.log(name); // print object name only 

//13.filter()

const fil = [10, 15, 20, 25, 30]

const great = fil.filter((num)=>num >20) // check condition true returns it

console.log(great);// return great 20

//14.filter ()object()

const product = [
    {name:"laptop",Price:40000},
    {name:"mouse",Price:10000},
    {name:"keyboard",price:5000}
]

 const amt = product.filter(num => num.Price >10000)
console.log(amt);

//15. Reduce() Sum()

const total = ["arr","obj","swa"]

const add = total.reduce((a,b)=> a + b) 

console.log(add); // reduce will returns the value into single value


// 16. cart system 

const pro = [
               { name: "Mobile", price: 10000 },
               { name: "Laptop", price: 50000 },
               { name: "Headset", price: 2000 }
            ]

const proName = pro.map((num)=>num.name)
const proPrice = pro.filter((num)=>num.price>5000)
const prototal = pro.reduce((a,b)=> a+ b.price,0)
const prolow = pro.some ((num)=>num.price < 3000)

console.log(proName);
console.log(proPrice);
console.log(prototal);
console.log(prolow);

//17. student marks system

const marks = [20,35,40,70,90,85,95]

const above = marks.filter((mark)=>mark>70)
const passed = marks.every((pass)=>pass>=35)
const failed = marks.find((fail)=>fail<35)
const ave = marks.reduce((a,b) => a+b,0 )
const average = ave / marks.length

console.log(above);
console.log(passed);
console.log(failed);
console.log(average);

// 20. flatten array 

const convert = [[1,2], [3,4], [5]] 

let concat = convert.reduce((a,b)=>{
    return a.concat(b);
},[])

console.log(concat);

















