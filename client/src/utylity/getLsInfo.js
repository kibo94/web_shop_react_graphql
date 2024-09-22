export function getLsInfo () {
    const user = JSON.parse(localStorage.getItem('user'));
    const cart = JSON.parse(localStorage.getItem('cart'));
    const auth = JSON.parse(localStorage.getItem('auth'));
    return {
        user:user || null , 
       cart:cart || [],
        auth:auth || false
    }
} 