import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import ArticleQ from '../queries/ArticleQuery';
import editArticleM from '../mutations/editArticle';
import { getArticles } from '../queries/__generated__/getArticles';
import { useMutation } from '@apollo/react-hooks';

import { updateArticle } from '../mutations/__generated__/updateArticle';
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
import {
  EditOutlined,
  UploadOutlined,
  DeleteOutlined
} from '@ant-design/icons';

const { Paragraph } = Typography;

export default function Hello() {
  const { loading, data, error } = useQuery<getArticles>(ArticleQ);
  const [editArticle] = useMutation<updateArticle, any>(editArticleM);
  const [visible, setVisible] = useState(false);
  const [articleById, setarticleById] = useState<any>({});
  const [form] = Form.useForm();
  const [confirmLoading, setconfirmLoading] = useState(false);

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
  const tailLayout = {};
  const handleOk = async () => {
    setconfirmLoading(true);
    try {
      const data = await form.validateFields();
      delete data.image;
      editArticle({ variables: { data, where: { id: articleById.id } } });
      // console.log(mutationLoading,mutationError)
      setconfirmLoading(false);
      setVisible(false);
      message.success('Запись успешно изменена');
    } catch (error) {
       message.error('Ошибка изменения записи');
      setVisible(false);
      setconfirmLoading(false);
    }
  };
  const showModal = (id: string) => {
    if (data && data.articles) {
      const article = data.articles.filter((i) => i && i.id === id)[0];

      if (article && article.image) {
        article.fileList = [];
        article.image = {
          ...article.image,
          uid: article.image.id,
          thumbUrl: `${process.env.REACT_APP_API_URL}${article.image.url}`,
        };
        article.fileList = [article.image];
      }
      setarticleById(article || {});
      setVisible(true);
    } else {
      //!вызвать тут ошибку
    }
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
                      <EditOutlined
                        key="edit"
                        onClick={() => showModal(article.id)}
                      />,
                      <DeleteOutlined key="ellipsis" />,
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
        onCancel={()=>setVisible(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={confirmLoading}
            onClick={() => handleOk()}
          >
            Сохранить
          </Button>,
        ]}
        confirmLoading={confirmLoading}
      >
        <Form
          {...layout}
          name="basic"
          form={form}
          initialValues={articleById}
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
            <Upload fileList={articleById.fileList}>
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
