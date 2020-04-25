import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import ArticleQuery from '../queries/ArticleQuery';
import { getArticles } from '../queries/__generated__/getArticles';
import { Typography, Card, Col, Row } from 'antd';
const { Paragraph } = Typography;
export interface PropsType {
  compiler: string;
  framework: string;
}

export default function Hello(props: PropsType) {
  const { loading, data, error } = useQuery<getArticles>(ArticleQuery);
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
              <Col key={article.id} span={8}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    article.image && (
                      <img
                        alt={article.image.name || ''}
                        src={`${process.env.REACT_APP_API_URL}${article.image.url}`}
                      />
                    )
                  }
                >
                  <Card.Meta
                    title={article.title}
                    description={article.author?.username}
                  />
                  <Paragraph style={{ marginTop: '10px' }}>
                    ${article.content}
                  </Paragraph>
                </Card>
              </Col>
            )
        )}
    </Row>
  );
}
