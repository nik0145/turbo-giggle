import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import ArticleQ from '../queries/ArticleQuery';
import editArticleM from '../mutations/editArticle';
import createArticleM from '../mutations/createArticle';
import deleteArticleM from '../mutations/deleteArticle';
import { getArticles } from '../queries/__generated__/getArticles';
import { useMutation } from '@apollo/react-hooks';

import { updateArticle } from '../mutations/__generated__/updateArticle';
import { createArticle } from '../mutations/__generated__/createArticle';
import { deleteArticle } from '../mutations/__generated__/deleteArticle';
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
  Empty,
} from 'antd';
import {
  EditOutlined,
  UploadOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

const { Paragraph } = Typography;

export default function Hello() {
  //* можно избавиться от refetch, и при удалении и создании добавлять данные в кеш
  //* https://www.apollographql.com/docs/angular/features/cache-updates/
  const { loading, data, error, refetch: refetchArticles } = useQuery<getArticles>(
    ArticleQ
  );
  const [onEditArticle] = useMutation<updateArticle, any>(editArticleM);
  const [onCreateArticle] = useMutation<createArticle, any>(createArticleM);
  const [onDeleteArticle] = useMutation<deleteArticle, any>(deleteArticleM);

  const [visible, setVisible] = useState(false);
  const [articleById, setArticleById] = useState<any>({});
  const [form] = Form.useForm();
  const [confirmLoading, setconfirmLoading] = useState(false);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const onDeleteArticleModal =  (id: string) => {
    Modal.confirm({
      title: 'Удаление записи',
      // icon: <ExclamationCircleOutlined />,
      content: 'Вы правда хотите удалить эту запись?',
      okText: 'Удалить',
      cancelText: 'Отмена',
      async onOk() {
        try {
          await onDeleteArticle({
            variables: { where: { id } },
          });
           await refetchArticles();
          message.success('Запись успешно удалена');
        } catch (error) {
          message.error('Ошибка удаления записи');
        }
      },
      onCancel() {
        return false;
      },
    });
  };
  const onFinishFailed = () => {
    console.log('error');
  };
  const propsUpload = {
    beforeUpload: (file: any) => {
      setArticleById({...articleById,fileList:[...(articleById.fileList || []),file]});
      return false;
    },
  };
  const tailLayout = {};
  const  handleUpload = (a: any) => {
    console.log(a)
    // const formData = new FormData();
  }
  const handleOk = async () => {
    setconfirmLoading(true);
    try {
      const dataForm = await form.validateFields();
      console.log(data);
      console.log('articleById', articleById);
      const formData = new FormData();
      if (dataForm.image && dataForm.image.file) {
        formData.append('files', dataForm.image.file, `${dataForm.image.file.name}`);
        formData.append('refId', articleById.id);
        formData.append('ref', 'article');
        formData.append('field', 'image');
        delete dataForm.image;
             await fetch(`${process.env.REACT_APP_API_URL}upload`, {
               method: 'POST',
               headers: {
                 //!нужно написать для авторизованных юзеров
               },
               body: formData,
             });
      }
   
      // const response = await fetch(`${process.env.REACT_APP_API_URL}upload`, {
 
      // const kek = await response.json()
      // console.log('kek', kek);
      //*проверка на не пустой объект articleById
      if (Object.keys(articleById).length !== 0) {
        await onEditArticle({
          variables: {
            dataForm,
            where: { id: articleById.id },
          },
        });
        //! так же не забудь тут обновить картинку
      } else {
        await onCreateArticle({
          variables: { dataForm },
        });
        await refetchArticles();
      }
      setconfirmLoading(false);
      setVisible(false);
      message.success('Запись успешно изменена');
    } catch (error) {
      console.log('error',error);
      message.error('Ошибка изменения записи');
      setVisible(false);
      setconfirmLoading(false);
    }
  };
  const showModal = (id?: string) => {
    console.log('showModal',id)
    if (data && data.articles) {
      if (id) {
          const article: any = data.articles.filter((i) => i && i.id === id)[0];

          if (article && article.image) {
            article.fileList = [];
            article.image = {
              ...article.image,
              uid: article.image.id,
              thumbUrl: `${process.env.REACT_APP_API_URL}${article.image.url}`,
            };
            article.fileList = [article.image];
          }
         
          setArticleById(article || {});
      }else{
       setArticleById({});
      }
       setVisible(true);
        

    } else {
      message.error('Невозможно редактировать несуществующую запись');
    }
  };
  if (loading) return <div>Loading</div>;
  if (error) return <h1>{error.message} </h1>;
  if (!data) return <div>no data</div>;
  return (
    <div>
      <Button
        style={{ marginBottom: '10px' }}
        type="primary"
        onClick={() => {form.resetFields();showModal()}}
      >
        Создать запись
      </Button>

      {data && data.articles && data.articles.length > 0 ? (
        <Row gutter={16}>
          {data.articles.map(
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
                      <DeleteOutlined
                        onClick={() => onDeleteArticleModal(article.id)}
                        key="ellipsis"
                      />,
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
                    <Paragraph
                      style={{
                        marginTop: '10px',
                      }}
                    >
                      {article.content}
                    </Paragraph>
                  </Card>
                </Col>
              )
          )}
        </Row>
      ) : (
        <Empty description="Отсутствуют данные" />
      )}
      <Modal
        title="Редактировать"
        visible={visible}
        onCancel={() => {setVisible(false);    form.resetFields();

        }}
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
          onFinishFailed={onFinishFailed}
        >
          <Form.Item {...tailLayout} label="Заголовок" name="title">
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout} label="Текст" name="content">
            <Input.TextArea />
          </Form.Item>

          <Form.Item {...tailLayout} label="Изображение" name="image">
            <Upload {...propsUpload} fileList={articleById.fileList}>
              <Button type="primary" onClick={()=>handleUpload}>
                <UploadOutlined /> Загрузить изображение
              </Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
