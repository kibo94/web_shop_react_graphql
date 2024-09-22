import React, { useContext } from 'react'
import { DataContext } from '../../context'
import { getProductsByType } from '../../utylity/getTypeProduct'
import Product from "./SingleProduct/SingleProduct"
function Products({type}) {
    console.log(type)
    const { products } = useContext(DataContext)
    const productsByType = getProductsByType(products,type)

    return (
        <div>
           <Product products={productsByType} />
        </div>
    )
}

export default Products
