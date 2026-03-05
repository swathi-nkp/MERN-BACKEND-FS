// Task 01 - Destructuring + Default Params + Template Literal

const createProfile = (user) =>{
    const {name,age,role = "user"} = user
    return `"${name} is ${age} years old works as user${role}"`
}

console.log(createProfile({name:"sudhan",age:21}));

// Task 2 – Spread + Rest + Arrow + Reduce

const calculate = (disount,...price)=>{
    const totalAmt = price.reduce((a,b)=>a+b,0);
    return totalAmt-(totalAmt*disount/100)
}

console.log(calculate(10,100,200,300));


