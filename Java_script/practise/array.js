
// const arr1 = ["ranjani","nithya"]
// const arr2 = ["swathi", "sweety", "sri", ]
// const  copy2 = [...arr2,"siva", "sindhu"]
// console.log(copy2);
// const merge = [...arr1,...arr2]
// console.log(merge);


const student ={
    name : "swathi",
    year : 2025
}

const data ={...student,year:2023}

console.log(data.year);


// function

function calculat (num){
    let msg;
     if ( num % 2 == 0){
msg = "even num"
     }
else{
    msg = "odd num"
    }
    return msg
}

console.log(calculat(9));
 console.log(calculat (4));


// hoisting

console.log(a);


