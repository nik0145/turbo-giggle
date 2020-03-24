import React from "react";  
import { useQuery } from "@apollo/react-hooks";
//я починю это правда...
interface T {
  children: any;
  query: any;
  id: any;
}

const Query = ({ children, query, id }: T) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query; 