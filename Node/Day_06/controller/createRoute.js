export const createRoute = async(req,res)=>{
 
 console.log(req.body);
 
}


export const getData = async(req,res) => {
    console.log(req.query);
    
}



//http://localhost:5000/api/create/created
//http://localhost:5000/api/create/getData