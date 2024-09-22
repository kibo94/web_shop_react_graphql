import React  from 'react';
import { Redirect } from "react-router-dom"
import "./User.css"
import { getLsInfo } from "../../utylity/getLsInfo"
const User = () => {
let {user , auth} = getLsInfo()
let redirect = null
let shopHistory = null
let userInfo = null
  if(!auth){
    redirect = <Redirect to='/login'/>
  }
  if(user)  {
    userInfo = (
        <div className="user-info">
            <p>Firstname: {user.firstName}</p>
            <p>Lastname: {user.lastName}</p>
            <p>Email Adress: {user.email}</p>
            <p>Street: {user.street}</p>
        </div>
    )
if(user.history.length > 0){
   shopHistory = (
    <div className="ItemsWraper">
    {user.history.map(product => (
        <div className="item">
         <p className="details" >{product.name}</p>
         <div className="item-image"></div>
         <p className="item-price">{product.price} din</p>
        </div>
    ))}
    </div>
   )
}  
  }
    return (
        <div>
            {redirect}
            {userInfo}
            <h2 className="history">History of shoping</h2>
            {shopHistory}
        </div>
    );
}
export default (User)

