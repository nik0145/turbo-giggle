import { gql } from 'apollo-boost';
export default gql`
  mutation deleteArticle($where: InputID) {
    deleteArticle(input: { where: $where }) {
      article {
        id
      }
    }
  }
`;

