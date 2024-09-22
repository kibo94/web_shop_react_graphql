
export const  totalPrice = cartitem => 
cartitem.map(cartitm => 
parseInt(cartitm.price) * cartitm.quantity).reduce((a,b) => a + b ,0)

