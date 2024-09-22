import React,{useContext , useEffect} from 'react';
import Navigation from "./Nav/Nav"
import { withRouter } from "react-router-dom";
import { getLsInfo } from '../../../utylity/getLsInfo';
import { DataContext } from "../../../context"
const Header = () => {
    const {user , auth , cart} = getLsInfo();
    const { logoutToLs} = useContext(DataContext);

    
    let navUserName = "";
    let totalPriceOfProducts = 0;
    let totalProductsInCart = 0;
    
    if(user){
    navUserName = user.firstName
    }
    const logoutHandler = () => {   
      localStorage.removeItem("user")
      localStorage.removeItem("auth")   
    }
    if(cart && cart.length > 0){
        totalProductsInCart = cart.length
        cart.forEach(cartItem => {
          totalPriceOfProducts += +cartItem.price
        })
      }
    return (
        <div>
        <Navigation auth={auth}
        user={user}
         navUserName={navUserName}
         totalProducts={totalProductsInCart}
         logout={logoutHandler} 
         total={totalPriceOfProducts}/>
        </div>
    );
}
export default withRouter(Header);
