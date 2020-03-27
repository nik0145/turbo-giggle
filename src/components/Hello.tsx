import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ArticleQuery from "../queries/ArticleQuery";
import { kek } from "../queries/types/kek";
export interface propsType {
  compiler: String;
  framework: String;
}

export default function Hello(props: propsType) {
  const { loading, data, error } = useQuery<kek>(ArticleQuery);
  if (loading) return <div>Loading</div>;
  if (error) return <h1>ERROR</h1>;
  if (!data) return <div>no data</div>;
  return (
    <div>
      <h1>
        {data &&
          data.articles &&
          data.articles.map(
            article =>
              article && (
                <div key={article.id}>
                  <h2>{article.title}</h2>
                  <p>{article.author?.username}</p>
                </div>
              )
          )}
        Hello ssda {props.compiler} and {props.framework}
      </h1>
    </div>
  );
}
