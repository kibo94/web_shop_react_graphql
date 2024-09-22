const { ApolloServer, gql } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const express = require("express")
const path = require('path')
let env = require("dotenv");
var app = express();
let http = require("http")
let cors = require("cors")
app.use(express.json());
app.use(cors())
env.config();

let port = 3000
// var firebase = require('firebase');
const typeDefs = `

    type Query {
        allUsers:[User!]!
        orders:[Order!]!
    }
type User{
id:String!
firstName:String!
lastName:String!
password:String!
email:String!
street:String!
history:[His!]

}
type His{
    name:String!
    price:String!
    matchName:String
    id:String!
    type:String
    route:String
    img_path:String
    quantity:Int
}

type Product {
  id:String
  name:String!
  price:String!
  quantity:Int!
  matchName:String
  route:String
  type:String
  img_path:String
  
  }
  type Info {
    firstName:String!
    lastName:String!
    email:String!
    phone:String!
    address:String!
  }
  input OrderData {

    firstName:String!
    lastName:String!
    email:String!
    phone:String!
    address:String

   
  }
type Order  {
id:String!
products:[Product!]
info:Info!
total:String
}  

input Prds{
  id:String
  name:String
  price:String
  quantity:Int!
  img_path:String
  matchName:String
  route:String
  type:String
}
  type Mutation{
      addToHistory(id:String!,history:[History]):User!
      singleUser(email:String!):User
      createUser(user:UserInput!):User!
      addOrderToOrders(id:String!,products:[Prds],info:OrderData,total:String!):Order!
    }

input UserInput{
id:String!
firstName:String
lastName:String!
password:String!
email:String!
street:String!

}

input History {
  name:String
  price:String
  matchName:String
  id:String!
  type:String
  route:String
  img_path:String
  quantity:Int
}
`
let orders = [
]
let users = [
  {
    id: "1",
    firstName: "Bojan",
    lastName: "Bogdanovic",
    password: "1234",
    email: "bojanb106@gmail.com",
    street: "ul 422 br3",
    history: []
  },

  {
    id: "2",
    firstName: "Goran",
    lastName: "Petrovic",
    password: "12345",
    email: "gogi10@gmail.com",
    street: "Nemaajnina 59",
    history: []
  }


]
const allUsers = function () {
  return users;
}
const singleUser = (parent, args) => {
  const user = users.find(user => user.email === args.email)
  if (!user) {
    return null
  }

  return user;

}
const addOrderToOrders = function (parent, args, ctx, info) {

  const order = {
    id: args.id,
    products: args.products,
    info: {
      firstName: args.info.firstName,
      lastName: args.info.lastName,
      phone: args.info.phone,
      address: args.info.address,
      email: args.info.email,
    },
    total: args.total
  }
  orders.push(order)
  return orders;

}
const getOrders = () => {
  return orders;
}

const addToHistory = function (parent, args, ctx, info) {
  const user = users.find(user => user.id === args.id)
  user.history = [...user.history, ...args.history]
  return user;

}
var createUser = function (parent, args, ctx, info) {
  const userExists = users.some((person) => person.email === args.user.email)
  if (userExists) {
    return [];
  }
  const userr = {
    firstName: args.user.firstName,
    lastName: args.user.lastName,
    password: args.user.password,
    id: args.user.id,
    street: args.user.street,
    email: args.user.email,
    history: []
    //     ...args.post
  }
  users.push(userr)
  return userr;
}

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    orders: getOrders,
    allUsers: allUsers,

  },
  Mutation: {
    createUser: createUser,
    addToHistory: addToHistory,
    singleUser: singleUser,
    addOrderToOrders: addOrderToOrders
  },

};
app.get('/', (req, res) => {
  res.send('Server is running');
});

const typeDefs2 = gql`
  type Query {
    hello: String
  }
`;
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});
const resolvers2 = {
  Query: {
    hello: () => "world",
  },
};
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,  // Enable introspection for development
  playground: true,     // Enable GraphQL Playground for development
});


// CORS middleware

// Apply Apollo middleware to the Express app
apolloServer.start().then(() => {
  apolloServer.applyMiddleware({
    app,
    path: '/api/graphql',
  });
});

// Export the express app for Vercel
module.exports = app;