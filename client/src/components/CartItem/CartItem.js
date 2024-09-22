import React, { useContext }  from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context';
import { getLsInfo } from '../../utylity/getLsInfo';


const CartItem = ({product,i}) => {
    const {setCartToLs} = useContext(DataContext)
    // let history = useHistory()
    // console.log(history)
    const {cart} = getLsInfo();
    const removeProductFromCart = (e,index) => {
        let filteredItems = cart.filter((item,i) => i !== index);
        localStorage.setItem("cart" , JSON.stringify(filteredItems))
        setCartToLs(filteredItems)
      }
    const changeQuantityOfSingleProductInCart = (e,id) => {
        let cpyCart = [...cart]
        cpyCart.map(cart => {
            if(cart.id === id) {
                cart.quantity = +e.target.value;
                return cart;
            }   
                return cart;
        })
    
        setCartToLs(cpyCart)
        localStorage.setItem("cart" , JSON.stringify(cpyCart))
    
    }
    const singleProductDetails = (name , route) => {
  
        // history.push(`${route}/${name}`)
    }
 
    return (
        
       <ul className="cart-ul">
          <li className="cart-li"><img src={require(`../../assets/${product.img_path}`)} alt="products"/></li>
          <li className="cart-li" onClick={()=>singleProductDetails(product.name, product.route)}>
              <Link to={`/${product.route}/${product.name}`}> {product.name}</Link>
           
              </li>
          <li className="cart-li">
          <input type="number" max="7" min="1" 
          value={product.quantity} 
          onChange={(e)=>changeQuantityOfSingleProductInCart(e,product.id)}/>
          </li>
          <li className="cart-li">{product.price * product.quantity}</li>
          <li className="cart-li" onClick={()=>removeProductFromCart(product,i)}><button className="btn btn-danger">x</button></li>
      </ul>
        
    );
}
export default CartItem;
