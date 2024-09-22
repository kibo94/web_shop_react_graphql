export const addProdcut = (product , porducts) => {
    let cpyPrds = {...product}
  
    let prdIndex = porducts.findIndex(data => data.id === product.id)
    if(prdIndex === -1){
        cpyPrds.quantity = cpyPrds.quantity + 1;
        porducts = [...porducts, cpyPrds]   
   }
    else{
        porducts[prdIndex].quantity = porducts[prdIndex].quantity +1;
   }
    return porducts;
}