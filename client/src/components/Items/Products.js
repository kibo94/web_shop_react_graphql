import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context'
import { getProductsByType } from '../../utylity/getTypeProduct'
import Product from "./SingleProduct/SingleProduct"
import axios from "axios"
import { useQuery } from 'react-apollo'
function Products({ type }) {

    const { products, setProducts } = useContext(DataContext)
    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        var prds = await axios.get("https://web-shop-react-graphql-api.vercel.app/api/products")
        setProducts(prds.data)
    }

    const productsByType = getProductsByType(products, type)

    return (
        <div>
            <Product products={productsByType} />
        </div>
    )
}

export default Products
