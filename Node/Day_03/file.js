import fs, { readFile } from "fs"

export const createFile = () =>{
    fs.writeFile("Data.txt","this is my file",(err)=>{
    if(err){
        console.log("error",err);
        return
    }

    console.log("file created successfully");
    
})
}

export const Readfile = () => {
    fs.readFile("Data.txt","utf-8",(err,data)=>{
if(err){
    console.log("error:",err);
    return
    
}
console.log(data);

    })
}

export const Adddata = () =>{
    fs.appendFile("Data.txt","adding a text",()=>{
        console.log("Adding successfully");
        
    })
}

export const  Removefile = () =>{
    fs.unlink("Data.txt",()=>{
        console.log("remove sucessfully");
        
    })
}

export const Createfolder = () =>{
    fs.mkdir()
}