import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ArticleQuery from "../queries/ArticleQuery";
import { kek } from "../queries/types/kek";
import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
export interface PropsType {
  compiler: string;
  framework: string;
}

export default function Hello(props: PropsType) {
  const { loading, data, error } = useQuery<kek>(ArticleQuery);
  if (loading) return <div>Loading</div>;
if (error) return <h1>{error.message} </h1>;
  if (!data) return <div>no data</div>;
  return (
    <Row gutter={16}>
      {data &&
        data.articles &&
        data.articles.map(
          (article) =>
            article && (
              <Col span={8}>
                <Card
                  key={article.id}
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt={article.title as string}
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title={article.title}
                    description={article.author?.username}
                  />
                </Card>
              </Col>
            )
        )}
    </Row>
  )
}
