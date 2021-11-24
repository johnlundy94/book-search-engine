import { gql } from "graphql-tag";

export const GET_USER = gql`
  query {
    getSingleUser {
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;
