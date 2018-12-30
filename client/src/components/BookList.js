/**
 * Created by upigilam on 12/29/18.
 */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

// components
import BookDetails from './BookDetails'

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }
    displayBooks() {
        var data = this.props.data;
        if (data.loading) {
            return (<div>Loading books...</div>);
        } else {
            // iterate thru books and return the list(<li>)
            // provide `key` attribute inside <li> tag to fix the below error:
            // Warning: Each child in an array or iterator should have a unique "key" prop
            return data.books.map(book => {
                return (
                    <li key={book.id} onClick={ (e) => {this.setState({selected: book.id})}}>{book.name}</li>
                );
            })
        }
    }
    render() {
        // console.log('props:: ', this.props);
        return (
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
                <BookDetails bookId={this.state.selected}/>
            </div>
        );
    }
}

// this means binding query to the component
// BookList will have response of the query which is stored in the props.
export default graphql(getBooksQuery)(BookList);
