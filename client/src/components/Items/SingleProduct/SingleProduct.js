import React,{ useContext } from 'react';
import { withRouter } from "react-router-dom"
import {DataContext} from "../../../context"
import { addProdcut } from '../../../utylity/addProduct'
import { getLsInfo } from "../../../utylity/getLsInfo"

const SingleItem = ({history , products}) => {
    const {setCartToLs} = useContext(DataContext)
    let { auth , cart } = getLsInfo()

    let cartProducts = cart;
    const addProductToACart = (product) => {

      
            cartProducts = addProdcut(product , cartProducts)
            localStorage.setItem('cart', JSON.stringify([...cartProducts]));
            setCartToLs([...cartProducts])
          
        
      
    }
    const singleProductDetails = (name , route) => {
  
        history.push(`${route}/${name}`)
    }
    return (
        <div className="ItemsWraper">
        {products.map ((product,i) => (
                <div key={i} className="item">
                <p className="details" onClick={()=>singleProductDetails(product.name, product.route)}>{product.name}</p>
                <div className="item-image">
                <img src={require(`../../../assets/${product.img_path}`)} alt="products"/>
            </div>
        <p className="item-price">{product.price} din</p>
        <button className="btn btn-success mybtn"  onClick={() => addProductToACart(product)}>Add to cart</button>
        </div>
        ))}
        </div>
    );
}

export default withRouter(SingleItem);
