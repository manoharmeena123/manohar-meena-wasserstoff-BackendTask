const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    product(id: ID!): Product
    products: [Product]
    user(id: ID!): User
    users: [User]
    order(id: ID!): Order
    orders: [Order]
  }

  type Product {
    id: ID
    name: String
    price: Float
    description: String
    inStock: Boolean
  }

  type User {
    id: ID
    name: String
    email: String
  }

  type Order {
    id: ID
    productId: ID
    userId: ID
    quantity: Int
    status: String
    orderedAt: String
  }
`);

module.exports = schema;
