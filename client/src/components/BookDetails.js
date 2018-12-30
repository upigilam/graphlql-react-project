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
    render() {
        // console.log('props:: ', this.props);
        return (
            <div id="book-details">
                <p>output book Details </p>
            </div>
        );
    }
}

// this means binding query to the component
export default graphql(getBookQuery)(BookDetails);
