import { gql } from 'apollo-boost';
export default gql`
  mutation createArticle($data: ArticleInput) {
    createArticle(input: { data: $data }) {
      article {
        title
        content
        id
      }
    }
  }
`;
