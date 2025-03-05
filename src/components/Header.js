import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
/**using link compenent if we click the anyy list it will not refresh the whole just refresh the actual part only */
export const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    return(
        <div className="header">
    <div className="logo-container">
        <img  className="logo" src={LOGO_URL}></img>
    </div>
    <div className="nav-items">
        <ul> 
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="btn" onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
        </ul>
    </div>
    </div>
)};
export default Header;