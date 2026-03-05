// Task 01 - Show 3 examples where implicit coercion gives unexpected results. Explain why.

let a = 1+"5"
console.log(a);

// js automatically converts string value into number. string concatenation will happend.

if([]+{}){
    console.log(true);   
}

// js automatically converts [] into string and {} into object so it converts []+{}=[object object] typeof string.

if (1==true){
    console.log(false);
    
}

// JavaScript converts the boolean to a number,So internally, JavaScript turns this into:1==1.

// Task 02 - calculateTotal(price, qty)

function calculateTotal(){
    const price ="1000";
    const qty = "5";
    const totalCost = Number(price) * Number(qty);
    console.log(totalCost);
    
}

calculateTotal();

// Task 03 - Demonstrate difference between == and ===

console.log(0=="0"); // True
console.log(0==="0") // False

console.log(true == 1); // True
console.log(true === 1); // False

console.log(0==0n); // True 
console.log(0===0n); // False

console.log(null == undefined); // True
console.log(null === undefined); // False

console.log(""== 0); // True
console.log(""=== 0); // False

// Task 04 -  function that converts any input to Boolean explicitly

function isTruthy(value) {
    return Boolean(value) ? "Truthy" : "Falsy";
}

// Examples:
console.log(isTruthy(0));      // Falsy
console.log(isTruthy(1));      // Truthy
console.log(isTruthy(""));     // Falsy
console.log(isTruthy("hi"));   // Truthy
console.log(isTruthy(null));   // Falsy






