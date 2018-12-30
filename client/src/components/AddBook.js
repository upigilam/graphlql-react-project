import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getAuthorsQuery } from '../queries/queries'

class AddBook extends Component {
    displayAuthors() {
        var data = this.props.data;
        if (data.loading) {
            return (<option>Loading Authors...</option>);
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                );
            })
        }
    }
    render() {
        // console.log('props:: ', this.props);
        return (
            <form id="add-book">
                <div className="field">
                    <label>Book name:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select>
                        <option> select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }
}

// bind getAuthorsQuery with the component AddBook
export default graphql(getAuthorsQuery)(AddBook);