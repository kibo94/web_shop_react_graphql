import React, {useContext} from 'react';
import {DataContext} from "../../context"
import "./Product.css"
import { addProdcut } from '../../utylity/addProduct';
import { getLsInfo } from '../../utylity/getLsInfo';

const Product = ({match}) => {
    console.log(match)
let {products , shopingCart , setCartToLs} = useContext(DataContext)
let { cart } = getLsInfo()

let singleProduct = null

let detailsHtml = null

const getSingleProduct = () => {
    console.log(products)
        let detailProduct = products.filter(product => product.name === match.params.name)
        let [product] = detailProduct
        singleProduct = product;  
}
getSingleProduct()

const addProductToCart = (product) => {

        shopingCart = addProdcut(product , cart)
        localStorage.setItem('cart', JSON.stringify([...shopingCart]));
        setCartToLs([...shopingCart])
       
}
if(singleProduct) {
        detailsHtml = (
            <div className="details-wraper">
                <div className="details-image">
                <img src={require(`../../assets/${singleProduct.img_path}`)} alt = {singleProduct.name}/>
            </div>
            <div className="details-info">
                <h2> {singleProduct.name}</h2>
                <h2> {singleProduct.price} din</h2>
                <button className="btn btn-success pp" onClick={() => addProductToCart(singleProduct)}>Add to cart</button>
            </div>
            </div>
    )
}
else {
   detailsHtml =  <h1>Porduct not found</h1>
}
    return (
        <div>
           {detailsHtml}
        </div>
    );
}
export default Product;
