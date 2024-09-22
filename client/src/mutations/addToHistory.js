import gql from "graphql-tag"

export default gql `
mutation addToHistory($id:String!,$history:[History]){
  addToHistory(id:$id,history:$history){
    history{
      name
    }
  }
}

`