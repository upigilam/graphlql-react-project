/**
 * Created by upigilam on 12/30/18.
 */
/**
 * Created by upigilam on 12/29/18.
 */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {
    displayBooksDetails() {
        const { book } = this.props.data; // ES6 grabbing book from data
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All Books by this author</p>
                    <ul className="other-blocks">
                    {book.author.books.map( item => {
                        return <li key={item.id}>{item.name}</li>
                    })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>No Book Selected...</div>
            )
        }
    }
    render() {
        // console.log(this.props)
        return (
            <div id="book-details">
            {this.displayBooksDetails()}
            </div>
        );
    }
}

// this means binding query to the component
// pass the books id to the query.
// passing the bookId returns the data object in the props, with out passing book id, no data is returned in the props.
export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);
