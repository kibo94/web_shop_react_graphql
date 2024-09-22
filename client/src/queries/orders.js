import gql from "graphql-tag"
export const orders = gql`
{
orders {
    id
    products {
        name
        price
        quantity
        img_path
        route
    
    }
    info{
        firstName
        lastName
        email
        phone
        address
  
    }
    total
   
  }
}


`
