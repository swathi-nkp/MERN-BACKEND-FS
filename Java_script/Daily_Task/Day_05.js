// call back function

function greet(name,wish){
        console.log("hi,I am",name);
        wish();
        
}

function sayBye(){
        console.log("Good bye");
        
}

greet("swathi",sayBye)

//Asynchronous

setTimeout (function(){
    console.log("Runs after 2 sec");
    
},2000)

// callback injection

function result(num,operation){    // (6,add)
    operation(num);                // add(6)
}

function add(a){                  //add(6)
    console.log(a+a);             // (6+6)
                                    // 12
    
}
function multiply(m) {            // multiply(5)
    console.log(m*m);             // (5*5) 
                                    // 25
}

result(6,add);
result(5,multiply);

// Map()

const number = [1,2,3,4,5]

const value = number.map(( num,numb )=>num*2)

console.log(value);
