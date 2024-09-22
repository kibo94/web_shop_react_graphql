
import React, { createContext, useReducer } from "react"
import myReducer from "./reducer"

const initialState = {
    text: "hello world",
    user: null,
    auth: false,
    orderss: [],
    products: [

    ],
    shopingCart: localStorage.getItem("user") ? JSON.parse(localStorage.getItem('cart')) : []

}

export const DataContext = createContext(initialState)
export const DataProvider = (props) => {
    const [state, dispatch] = useReducer(myReducer, initialState)
    function setText() {
        console.log(state)
        dispatch({
            type: "SET_TEXT"
        })
    }
    function setUserToLs() {
        dispatch({
            type: "GET_USER_FROM_LS"
        })
    }
    function setUser(user) {
        dispatch({
            type: "SET__USER",
            payload: user
        })
    }

    function setProducts(prds) {
        dispatch({
            type: "SET__PRODUCTS",
            payload: prds
        })
    }



    function setCartToLs(cart) {
        dispatch({
            type: "UPDATE__ITEM__IN__CART",
            payload: cart
        })
    }
    function emptyCart() {
        dispatch({
            type: "EMPTY_CART"
        })
    }
    function setOrders(orders) {
        dispatch({
            type: "SET__ORDERS",
            payload: orders
        })
    }
    return <DataContext.Provider value={{
        products: state.products,
        text: state.text,
        setText,
        setUser,
        user: state.user,
        setUserToLs,
        setCartToLs,
        setOrders,
        orderss: state.orderss,

        shopingCart: state.shopingCart,
        emptyCart,
        setProducts: setProducts
    }}>
        {props.children}
    </DataContext.Provider>
}








