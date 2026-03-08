import { Component } from "react";
import Logo from "../Pages/Logo";
import Button from "./Button";
import Banner from "./Banner";

class NavBar extends Component{

render(){
    return(<>
    <div className="nav">

    <Logo/>
        <div>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact us</a>
     
        </div>

        </div>

        <div><Banner/></div>
    
    
      
    <div>
         <Button/>

    </div>
    </>)
}
}

export default NavBar