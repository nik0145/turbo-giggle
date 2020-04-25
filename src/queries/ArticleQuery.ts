import { gql } from 'apollo-boost';
export default gql`
  query getArticles {
    articles {
      id
      title
      content
      image {
        url
        name
        id
        url
      }
      author {
        id
        email
        username
      }
    }
  }
`;
