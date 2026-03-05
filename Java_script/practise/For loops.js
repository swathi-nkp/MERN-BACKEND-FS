// For loop

// Syntax

// for (initialExpression;condition;step){
//     console.log();
    
// }

// print 1 to 5 Number 

for ( i = 0;i <= 5;i++){
       console.log(i);
       
}

// print even number 2 to 10

for( i = 2; i <= 10; i += 2){
    console.log(i);
    
}

// countdown from 5 to 0

for( i = 5; i >= 0; i--){
    console.log(i);
    
}
//Day 02

// Array 

let arr = [10,20,30]

for(i = 0;i < arr.length;i++){
    console.log(arr[i]);
    
}
// sum the array value

let arr1 = [1,2,3,4,5]
let sum = 0
for (let i = 0;i < arr1.length;i++){
    sum += arr1[i];
}

console.log(sum);

// largest number in array

const arr2 = [12, 45, 7, 89, 23]
let large = arr2[0]

for ( let i = 0;i < arr2.length;i++){
    if (arr2[i] > large) {
        large = arr2 [i];
    }
    console.log(large);
}



// Day 03

// pattern printing

for (let i = 0 ; i <= 5;i++){
    let pattern = "" ;
    for(let j = 0; j <= i;j++){
        pattern +="*";
    }

    console.log(pattern);
}



for (let i = 0; i <= 5; i++){
    let pattern = "";
    for(let j = 0;  j <= i; j++ ){
        pattern += j
        
    }
    console.log(pattern);
}

// Day 04

// vowels printing

let str = "javascript";
let count = 0;
for (i = 0;i<=str.length;i++){
    let same = str[i]
    if (
        same === "a" ||
        same === "e" ||
        same === "i" ||
        same === "0" ||
        same === "u" 
       )
    {
        count++
    }
}

    console.log(count);


// square pattern 

for (i = 1; i <= 4;i++){
    let row =""
    for (j = 1;j <= 4;j++){
        row+="*"
    }
    console.log(row);
    
}
 



