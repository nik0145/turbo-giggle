import { ApolloClient } from "apollo-client";  
import { InMemoryCache } from "apollo-cache-inmemory";  
import { HttpLink } from "apollo-link-http";
import { setContext } from 'apollo-link-context';

const cache = new InMemoryCache();  
const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_API_URL}graphql`
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});;

const client = new ApolloClient({  
    cache,
    link: authLink.concat(httpLink),
  });
  export default client;  