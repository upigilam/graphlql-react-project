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

