
import React, { createContext, useReducer } from "react"
import myReducer from "./reducer"

const initialState = {
    text: "hello world",
    user: null,
    auth: false,
    orderss: [],
    products: [
        {
            name: "Lenovo 3360 S",
            price: "30000",
            matchName: "Lenovo3360S",
            id: "1",
            type: "home",
            route: "televizori",
            img_path: "lap.jpg",
            quantity: 0
            ,
        },
        {
            name: "Iphone 6s",
            price: "60000",
            type: "home",
            route: "mobilni",
            img_path: "mobile1.jpg",
            quantity: 0,
            id: "2",

        },
        {
            name: "DELL 360 A",
            price: "50000",
            id: "3",
            type: "lap",
            route: "laptopovi",
            img_path: "lap1.jpg",
            quantity: 0,


        },

        {
            name: "Toshiba 3333",
            price: "30000",
            id: "4",
            type: "lap",
            route: "laptopovi",
            img_path: "lap2.jpg",
            quantity: 0,

        },
        {
            name: "IPHONE 7S",
            price: "50000",
            id: "5",
            type: "mob",
            route: "mobilni",
            img_path: "mobile2.jpg",
            quantity: 0,


        },
        {
            name: "SAMSUNG J5",
            price: "20000",
            id: "6",
            type: "mob",
            route: "mobilni",
            img_path: "mobile3.jpg",
            quantity: 0,

        },
        {
            name: "SAMSUNG TV",
            price: "90000",
            id: "7",
            type: "tv",
            route: "televizori",
            img_path: "tv1.jpg",
            quantity: 0,

        },
        {
            name: "SONY TV",
            price: "70000",
            id: "8",
            type: "tv",
            route: "televizori",
            img_path: "tv3.jpg",
            quantity: 0,

        }

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
        emptyCart
    }}>
        {props.children}
    </DataContext.Provider>
}








