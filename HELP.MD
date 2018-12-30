/*
 front end query
 ===============
 // {
 //     book(id: "5c25f3d4da7f9b1f515add39"){
 //         name
 //         genre
 //         author {
 //             age
 //             name
 //             books {
 //                 name
 //             }
 //         }
 //     }
 // }

 // ===========//
 // {
 //     author(id: "5c25f15c8bdba916235ee758") {
 //         name
 //         age
 //         books {
 //             name,
 //                 genre
 //         }
 //     }
 // }

// ===========//
// {
//     authors{
//         name
//         age
//         books {
//             id
//             name
//         }
//     }
// }

// ===========//

// book(id: "2") {
//     name
//     genre
// }

// ===========//

 // mutation {
 //     addAuthor(name: "veda", age: 7) {
 //         name
 //         age
 //     }
 // }

// ===========//

 // mutation {
 //     addBook(name: "the name of the wind", genre:"fantacy", authorId: "5c25f1c68ef2601c4c91a79a") {
 //         name
 //         genre
 //     }
 // }

 */
Before using react and apollo:
client(browser)[graphiql] -> server(node.js) [express app + graphql server] -> DB[mongo DB]

replace graphiql with react APP + apollo

After using react and apollo:
client(browser)[react APP + apollo] -> server(node.js) [express app + graphql server] -> DB[mongo DB]


// In order to query graphql server from the front end, we need to use graphql client which is called `apollo`
// here front end react doesnt matter. any thing will be fine, it can be vue.js with graphql client
// apollo will send request and receive respone to-and-fro from graphql server

// apollo-boost will install bunch of apollo client modules
// react-apollo is an glue between react and apollo.

// next step:
- now we need to do construct queries.

// next step:
- bind the query to the component

// next step:
- [Network error]: TypeError: Failed to fetch
- reason : Access-Control-Allow-Origin, graphql server is not accepting anything from the client. because front end
-           and back end are coming from the different servers.
- install `cors` to fix.