 const myReducer = (state , action) => {
    switch(action.type){
        case  "GET_USER_FROM_LS" : {
            return {
                ...state ,
                user:action.payload
            }
        }
        case  "SET__USER" : {
            localStorage.setItem('user', JSON.stringify(action.payload));
            return{
                ...state,
                user:action.payload
            }
           
        }
        case "SET__ORDERS":{
            return {
                ...state,
                orderss:action.payload
            }
        }
        case  "GET_CART_TO_LS" : {
            let cart = localStorage.getItem("cart")
            console.log(cart)
            if(!cart){
                localStorage.setItem('cart',JSON.stringify([]))
            }
        }
        case  "UPDATE__ITEM__IN__CART" : {
            console.log(action.payload)
           const upadatedCart = action.payload
  
            return {
                ...state ,
                shopingCart:upadatedCart
             }
        }
        case  "EMPTY_CART" : {
            localStorage.removeItem("cart")
            return {
                ...state ,
                shopingCart:[]
            }
        }
        default : return state;
    }

}
export default myReducer;