import React, { useContext, useState } from 'react';

import "./Cart.css"
import { useMutation } from "react-apollo"
import { totalPrice } from "../../utylity/totalPrice"
import { getLsInfo } from '../../utylity/getLsInfo';
import { DataContext } from "../../context"
import CartItem from '../CartItem/CartItem';
import CartUserFrom from './CartUserForm/CartUserFrom';
import { cartValidation } from "../../utylity/cartValidation"
import ValidationMessages from '../UI/Input/CartValidationMessages/ValidationMessages';
import { addOrder } from '../../mutations/addOrderToOrders';
const Cart = ({ mutate }) => {
  const { emptyCart, } = useContext(DataContext)
  const { user, cart, auth } = getLsInfo();
  const [addTodo, { data }] = useMutation(addOrder);
  let cartProducts = null;
  let totalPriceOfProductsInCart = totalPrice(cart);
  const [messages, setMessages] = useState([])
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  })
  const finishShoping = () => {
    addTodo({
      variables: {
        id: new Date().toISOString(),
        products: cart,
        info: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: "3333-222",
          address: user.street,
        },
        total: "" + totalPriceOfProductsInCart
      }
    })
    emptyCart()
  }

  const finishShopingInputs = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  const finishShopingNoUser = (e) => {
    e.preventDefault()
    console.log(userData)
    let valide = cartValidation(userData)
    let str = new Date().toISOString()
    if (valide.valid) {
      mutate({
        variables: {
          id: str,
          products: cart,
          info: {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            phone: userData.phone,
            address: userData.address,


          }
        },
      })



      emptyCart()
      setMessages([])
    }
    else {
      setMessages(valide.messages)
    }

  }



  if (cart.length > 0) {

    cartProducts = (
      <div>
        {cart.map((product, i) => (
          <CartItem product={product} key={i} i={i} />))}
      </div>
    )

  }
  return (
    <div>
      {cartProducts}
      {totalPriceOfProductsInCart !== 0 ?
        <h2 className="text-right price">
          <span className="text-success">  Total :{totalPriceOfProductsInCart} din</span>
        </h2> : null}
      {!auth && cart.length > 0 ? <CartUserFrom messages={messages}
        finishShopingInputs={finishShopingInputs}
        finishShoping={finishShopingNoUser} /> : null}
      {cart.length > 0 && auth ?
        <button className="btn btn-success" onClick={finishShoping}>Finish Shoping</button>
        : null}

      {(cart.length === 0 && auth)
        || (cart.length === 0 && !auth)
        ? <h2 className="text-center empty">
          Emty Cart</h2>
        : null}
    </div>
  );
}
export default Cart;
