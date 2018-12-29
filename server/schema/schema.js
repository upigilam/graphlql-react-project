// responsibilities of schema file
// 1. define types ex: books
// 2. relationships between types ex: every book has an author
// 3. defining root queries

const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../models/book');
const Author = require('../models/author');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

// dummy data
// var books = [
//     {name: 'name of the wind', genre: 'Fantacy', id: '1', authorId: '1'},
//     {name: 'The final empire', genre: 'Fantacy', id: '2', authorId: '2'},
//     {name: 'The long Earth', genre: 'Sci-fi', id: '3', authorId: '3'},
//     {name: 'name of the wind1', genre: 'Fantacy', id: '4', authorId: '2'},
//     {name: 'The final empire1', genre: 'Sci-fi', id: '5', authorId: '3'},
//     {name: 'The long Earth1', genre: 'Fantacy', id: '6', authorId: '2'}
// ];
//
// var authors = [
//     {name: 'patric', age: '44', id:'1'},
//     {name: 'Brandon', age: '42', id:'2'},
//     {name: 'Terry', age: '66', id:'3'}
// ];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        genre: { type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args){
                // return _.find(authors, {id: parent.authorId});
                // grab the data from the mongo db
                return Author.findById(parent.authorId)
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        age: { type: GraphQLInt},
        books: {
            // type: BookType - this cant be bookType since each author can have multiple books authored
            // so get getting the list of books make sense. so import GraphQLList from graphql
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                // return _.filter(books, {authorId: parent.id});
                return Book.find({
                    authorId: parent.id
                })
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    // these are queries from the front end
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLID}},
            resolve(parent, args) {
                // console.log('type of id', typeof(args.id));
                // code to get data from db / other source
                // return _.find(books, {id: args.id});
                return Book.findById(args.id);
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                // return _.find(authors, {id: args.id});
                return Author.findById(args.id);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                // return books;
                // empty object inside find means return all the books
                return Book.find({});
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parents, args) {
                // return authors;
                return Author.find({});
            }
        }
    }

});

// mutation means changing some thing, for ex: add/create/delete

// mutation to add author and book

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parents, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                return author.save();
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)}, // GraphQLNonNull means do not allow this mutation accept null name
                genre: {type: new GraphQLNonNull(GraphQLString)},
                authorId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parents, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });
                return book.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});