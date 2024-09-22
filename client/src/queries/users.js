import gql from "graphql-tag"



export default gql `
{
allUsers {
    email
    password
    street
    firstName
    lastName
    id
    history{
        name
        price
    }
  }
}


`
