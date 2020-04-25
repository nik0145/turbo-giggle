import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import ArticleQuery from '../queries/ArticleQuery';
import { getArticles } from '../queries/__generated__/getArticles';
import {
  Modal,
  Typography,
  Upload,
  message,
  Button,
  Card,
  Col,
  Row,
  Form,
  Input,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Paragraph } = Typography;
export interface PropsType {
  compiler: string;
  framework: string;
}

export default function Hello(props: PropsType) {
  const { loading, data, error } = useQuery<getArticles>(ArticleQuery);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setconfirmLoading] = useState(false);
const fileList = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'error',
  },
];

const props1 = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...fileList],
};
//!!!!
//https://ant.design/components/form/
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const onFinish = () => {
    console.log('onFinish');
  };
  const onFinishFailed = () => {
    console.log('onFinish');
  };
  const tailLayout = {
  };
  const handleOk = () => {
    console.log('handleOk');
    setconfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setconfirmLoading(false);
    }, 2000);
  };
  const showModal = () => {
    setVisible(true);
  };
  if (loading) return <div>Loading</div>;
  if (error) return <h1>{error.message} </h1>;
  if (!data) return <div>no data</div>;
  return (
    <div>
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
                    actions={[
                      <SettingOutlined key="setting" />,
                      <EditOutlined key="edit" onClick={showModal} />,
                      <EllipsisOutlined key="ellipsis" />,
                    ]}
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
      <Modal
        title="Редактировать"
        visible={visible}
        onOk={handleOk}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={confirmLoading}
            onClick={handleOk}
          >
            Сохранить
          </Button>,
        ]}
        confirmLoading={confirmLoading}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item {...tailLayout} label="Заголовок" name="title">
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout} label="Текст" name="content">
            <Input.TextArea />
          </Form.Item>

          <Form.Item {...tailLayout} label="Изображение" name="image">
            <Upload {...(props1 as any)}>
              <Button>
                <UploadOutlined /> Загрузить изображение
              </Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
