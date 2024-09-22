import React from 'react'
import ValidationMessages from '../../UI/Input/CartValidationMessages/ValidationMessages'
import "../Cart.css"
function CartUserFrom({finishShoping , finishShopingInputs,messages}) {
   
    return (
       <div className="cartUserForm">
        <form>
            <input placeholder="FirstName" name="firstName" onChange={finishShopingInputs}/>
            <input placeholder="LastName" name="lastName" onChange={finishShopingInputs}/>
            <input placeholder="Email" name="email" onChange={finishShopingInputs}/>
            <input placeholder="Address" name="address" onChange={finishShopingInputs}/>
            <input placeholder="Phone" name="phone" onChange={finishShopingInputs}/>
            <button className = "btn btn-success mb-1 " onClick = {finishShoping}>Finish Shoping</button>
            <ValidationMessages messages={messages} />
        </form>
        </div>
    )
}

export default CartUserFrom
