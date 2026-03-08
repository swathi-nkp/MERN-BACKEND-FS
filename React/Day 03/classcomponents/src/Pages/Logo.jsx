 import { Component } from "react";
import logo from "../Pictures/pic1.png"

 class Logo extends Component {
    render(){
        return (<>
        <div className="logo">
       <img src={logo}/>
     </div>
        </>)
    }
 }

export default Logo