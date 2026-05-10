import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {
         
    const navigate = useNavigate()

    const [formData,setformData] =useState({useremail:"",password:""})

    const handlechange = (e)=>{

        setformData({...formData,[e.target.name]:e.target.value})
    }

    const handlesubmit = async(e)=>{
     
        e.preventDefault()

       try {
        
          const sendData = await axios.post("http://localhost:5000/api/user/login",formData)

            setformData({useremail:"",password:""})

           localStorage.setItem("jwttoken",sendData.data.token)

            alert(sendData.data.msg)

        navigate("/dashboard")
        
        

       } catch (error) {
        

        alert(error.response.data.msg)

        
       }

    
    }


  return (
    <>
      <form onSubmit={handlesubmit}>

        <input type="email" value={formData.useremail} name="useremail" placeholder="Enter the your email" onChange={handlechange} />
        <input type="password" value={formData.password} name="password" placeholder="Enter the your password " onChange={handlechange} />
        <input type="submit"value={"login"} />
      </form>
    </>
  )
}

export default Login
