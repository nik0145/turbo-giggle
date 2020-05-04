import { gql } from 'apollo-boost';
export default gql`
  mutation updateArticle($where: InputID, $data: editArticleInput) {
    updateArticle(input: { where: $where, data: $data }) {
      article {
        title
        id
        content
      }
    }
  }
`;
