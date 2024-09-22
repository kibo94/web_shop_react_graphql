import gql from "graphql-tag"



export default gql `

mutation createUser($user:UserInput!){

    createUser(user:$user){
        email
        password
        street
        firstName
        lastName
        id

        history{

            name

        }

    }

}

`


