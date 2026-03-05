// Basic star pattern

// square

for ( i = 0 ;i <= 5;i++){
    let row = ""
    for (j=0; j<=5;j++){
        row += "*"
    }
    console.log(row);
    
}

// rectangel

for (i = 0; i <=4;i++){
    let ro = ""
    for(j=0;j<=9;j++){
        ro += "*" 
    }
    console.log(ro);
    
}

// left triangle

let row = ""
for (i=0;i<=5;i++){
    row +="*"
    console.log(row);

}

// Right triangle

for (let i = 1;i <= 5;i++){
    let row =" "
    //console.log("i",i);
    for (let  j = 1;j <= 5 - i;j++){
        row+=" "
      //  console.log("j",j);
        
    }
    for (let k = 1;k <= i;k++){
        row +="*"
       // console.log("k",k);
        
    }
console.log("row",row);


}

// inverted right triangle

for( i = 5;i >= 0;i--){
    let row =""
    for(j=1;j<=i;j++){
     row+="*"
    }
    console.log(row);
}
