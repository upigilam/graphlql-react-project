/**
 * Created by upigilam on 12/23/18.
 */
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const mongoose = require('mongoose');

const app = express();

// what this means is when ever url hit on http://localhost:4000/graphql
// 1. go to graphqlHTTP and do what ever is inside. if there is nothing inside then we get the below error.

/* {
 "errors": [
 {
 "message": "GraphQL middleware options must contain a schema."
 }
 ]
 }*/

// 2. to get rid of the above error, we have to pass a schema thru middleware to work.

// connect to mlab database
mongoose.connect('mongodb://upigilam:stage2123@ds037478.mlab.com:37478/gql-upendra-test');
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // what this means is, we want to use graphiql tool when we go to /graphql route
}));



app.listen(4000, () => {
    console.log('now listening for request on port 4000');
});