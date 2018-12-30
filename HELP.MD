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

// next step:
- refresh react page, now there will be two props printed on the console. reason being, one is at the time of loading
    another is with the actual data

// next step:
- access the books list from the props and populate the list and show it on front end

// next step:
- add the ui for add book.
- form.html is sample html which will used in AddBook.js

// next step:
- externalize gql queries

// next step:
- step1: class state of the application, we need to keep track of each value
- step2: attach an event
- step3: eventually make an mutation to add the record

// next step:
- create a mutation to update the data in to data base.
- compose both query and mutation
- access the respective props
