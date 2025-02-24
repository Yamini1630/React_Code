import React from "react";
import ReactDOM from "react-dom/client";
const Header=()=>{
    return(
        <div className="header">
    <div className="logo">
        <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"></img>
    </div>
    <div className="nav-items">
        <ul>
            <li>Hooome</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Carrt</li>
        </ul>
    </div>
    </div>
)}

const AppLayout=()=>{
    return <div className="app">
        <Header />
    </div>
}




const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />);

