import { ApolloClient } from "apollo-client";  
import { InMemoryCache } from "apollo-cache-inmemory";  
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();  
const link = new HttpLink({
  uri: `${process.env.REACT_APP_API_URL}graphql`
});

// const link = setContext((request, previousContext) => ({
//     headers: {
//       'Authentication': `Bearer ${previousContext.graphqlContext.authKey}`,
//     }
//   })).concat(http);

const client = new ApolloClient({  
    cache,
    link
  });
  export default client;  