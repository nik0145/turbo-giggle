import { gql } from 'apollo-boost'
export default gql`
query kek{
articles{
  id
  title
  content
  author{
    id
    email
    username
  }
}
}
`