import gql from "graphql-tag"



export default gql `
mutation singleUser($email:String!){

    singleUser(email:$email){
        firstName
        lastName
        street
        id
        email
        password
        history{
            name
            price
        }
    }
  }
  

`