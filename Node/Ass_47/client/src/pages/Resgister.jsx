import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Resgister = () => {

     const navigate = useNavigate()

    const [formData,setformData] = useState({username:"",useremail:"",password:""})

    const handlechange = (e)=>{

        setformData({...formData,[e.target.name]:e.target.value})  
    
    }

    const handlesubmit = async(e)=>{

    e.preventDefault()
         
       try {
         
         const sendData = await axios.post("http://localhost:5000/api/user/resgister",formData)

        alert(sendData.data.msg)
        setformData({username:"",useremail:"",password:""})

        navigate("/login")



       } catch (error) {

        alert(error.response.data.msg)
        
       }
    }


  return (
    <>
      <form onSubmit={handlesubmit}>
        
        <input type="text" value={formData.username} name="username" placeholder="Enter the name" onChange={handlechange}/>
        <input type="email" value={formData.useremail} name="useremail" placeholder="Enter the email" onChange={handlechange}/>
        <input type="password" value={formData.password} name="password" placeholder="Enter the password" onChange={handlechange}/>
         <input type="submit" value={"login"} />
      </form>
      
    </>
  )
}

export default Resgister
