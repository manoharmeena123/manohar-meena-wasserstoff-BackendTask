const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('../graphql/schema');
const resolvers = require('../graphql/resolvers');

const router = express.Router();

router.use('/', createHandler({
    schema,
    rootValue: resolvers,
    graphiql: true // Enable GraphiQL interface
}));

module.exports = router;
