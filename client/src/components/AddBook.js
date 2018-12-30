import React, { Component } from 'react';
// use `compose` to combine two different queries to components.
import { graphql, compose } from 'react-apollo'
import { getAuthorsQuery, addBookMutation } from '../queries/queries'

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }

    displayAuthors() {
        // after compose, need to access respective object from props
        var data = this.props.getAuthorsQuery;
        if (data.loading) {
            return (
                <option> Loading Authors... </option>
            );
        } else {
            return data.authors.map(author => {
                return (
                    <option key = {author.id} value ={author.id}>{author.name}</option>
                );
            })
        }
    }

    submitForm(e) {
        // preventing the default action on the event.
        e.preventDefault();
        // console.log(this.state);
        // add a book. this adds the empty name, genre since name and genre are defaulted in mutation.
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            }
        });
    }

    render() {
        // console.log('props:: ', this.props);
        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) }/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={ (e) => this.setState({ genre: e.target.value }) }/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={ (e) => this.setState({ authorId: e.target.value }) }>
                        <option> select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }
}

// combine query and mutation using compose
export default compose(
    graphql(getAuthorsQuery, { name:"getAuthorsQuery"}),
    graphql(addBookMutation, { name:"addBookMutation"})
)(AddBook);