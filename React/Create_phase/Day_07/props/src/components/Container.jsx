import Presentation from "./Presentation"

const Container = () =>
{
  const user = [
    {id:1,name:"Swathi",age:21},
    {id:2,name:"Nithiya",age:22},
    {id:3,name:"Aswitha",age:24}

  ]

    return(<>
   <h1 className="font-bold text-2xl">User Name</h1>
  <div><Presentation users = {user}/></div>
    </>)
}

export default Container