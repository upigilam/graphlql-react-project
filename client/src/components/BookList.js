/**
 * Created by upigilam on 12/29/18.
 */
import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo'

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`

class BookList extends Component {
    render() {
        console.log('props:: ', this.props);
        return (
            <div>
                <ul id="book-list">
                    <li>Book name</li>
                </ul>
            </div>
        );
    }
}

// this means binding query to the component
// BookList will have response of the query which is stored in the props.
export default graphql(getBooksQuery)(BookList);
