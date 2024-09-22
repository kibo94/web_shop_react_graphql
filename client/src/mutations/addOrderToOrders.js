import gql from "graphql-tag"

export  const addOrder = gql `
mutation addOrderToOrders($id:String!,
    $products:[Prds],
    $info:OrderData
    $total:String!
    )
  {
    addOrderToOrders(
        id:$id,
        products:$products,
        info:$info
        total:$total
   ){
    info{
      firstName
    }
   total
   
  }
}

`