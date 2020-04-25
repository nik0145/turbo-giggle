import { gql } from 'apollo-boost';
export default gql`
query getMe{
    me{
        id
        username
        email
        confirmed
        blocked
        role{
            name
        }
    }
}
`;

