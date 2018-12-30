/**
 * Created by upigilam on 12/30/18.
 */
import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`


export {
    getAuthorsQuery,
    getBooksQuery
};