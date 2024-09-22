import React, { useState } from 'react';
import "./Nav.css"
import logo from "../../../../cart.png"
import {Link} from "react-router-dom"

const Nav = ({logout , navUserName , totalProducts , auth,user}) => {
        const [toogleClassForBody,setToogleClassForBody] = useState(false)
        let bodyClasses=["nav-links-ul-left"]
            if(toogleClassForBody){
                bodyClasses=["nav-links-ul-left","show"]
        }
  let body = document.body;
    const toogle = () => {
        setToogleClassForBody(!toogleClassForBody)
     
    }

    const toogle2 = () => {
        setToogleClassForBody(false)
        
    }
    return (
        <div>
        <nav className="nav">
          <div className="bar" onClick={toogle}><i  style={{color:"white"}} className="fa fa-bars ml-2"></i></div>
            <Link  onClick={toogle2} className="logo" to={"/"}><img src={logo} alt="logo"/></Link>
            <ul  className={bodyClasses.join(" ")}>

                <li className="nav-links">
                    <Link  onClick={toogle2} className="link-left" to={"/"} style={{textDecoration:"none"}} >Home</Link>
                </li>
                <li className="nav-links">
                    <Link  onClick={toogle} className="link-left" to={"/laptopovi"} style={{textDecoration:"none"}}>
                    Laptopovi
                   </Link>
                </li>
                <li className="nav-links">
                    <Link  onClick={toogle} className="link-left" to={"/mobilni"} style={{textDecoration:"none"}}>Mobilni</Link>
                </li>
                <li className="nav-links">
                    <Link  onClick={toogle} className="link-left" to={"/televizori"} style={{textDecoration:"none"}}>Televizori</Link>
                </li>
                {auth && user.email === "bojanb106@gmail.com"
                ?
                <li className="nav-links">
                <Link  onClick={toogle} className="link-left" to={"/orders"} style={{textDecoration:"none"}}>Orders</Link>
            </li> 
            :null }
                   {auth && user.email === "bojanb106@gmail.com"
                ?
                <li className="nav-links">
                    <Link  onClick={toogle} className="link-left" to={"/product-menager"} style={{textDecoration:"none"}}>Products Menager</Link>
                </li>
            :null }
             
             
            
            </ul>
            <ul className="nav-links-ul-right">
                <li className="nav-links"> 
                {!auth 
                ? <Link to={"/login"}  onClick={toogle2} className="link-right" style={{textDecoration:"none"}}>Login</Link>
                : <Link to={"/"} onClick={logout} className="link-right" style={{textDecoration:"none"}}>Logout</Link>}     
                  </li>
               {!auth ?
               <li className="nav-links">
                  <Link className="link-right" style={{textDecoration:"none"}}  to="/register">Register</Link></li>
               :null}
               <li className="nav-links icons">
                  <Link to={"/cart"} onClick={toogle2}   style={{textDecoration:"none"}}><i className="fa fa-shopping-cart link-right-icon"></i>
               <span className="text-success ml-2">{totalProducts}</span>
                 </Link>
               </li>
               <li className="nav-links icons">
                  <Link onClick={toogle2}  style={{textDecoration:"none"}}  to="/user"><i className="fa fa-user mr-2 link-right-icon" ></i>
              <span className="text-warning">{navUserName}</span>
                 </Link>
               </li>
            </ul>
        
        </nav>

        </div>
    );
}

export default Nav;
