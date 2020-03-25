import { gql } from 'apollo-boost'
export default gql`
query kek{
article{
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