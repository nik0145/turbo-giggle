import React from "react";
import { useDispatch } from 'react-redux'
import { loginUser } from '../actions/auth'
//https://blog.strapi.io/protected-routes-and-authentication-with-react-and-node-js/

//https://medium.com/freecodecamp-russia-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D1%8F%D0%B7%D1%8B%D1%87%D0%BD%D1%8B%D0%B9/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-jwt-%D0%B2-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8-react-redux-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-585bfe1399b0
//https://levelup.gitconnected.com/using-jwt-in-your-react-redux-app-for-authorization-d31be51a50d2
//https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example
//https://www.youtube.com/watch?v=4T_P7wQhlMY
import { Form, Input, Button } from "antd";
import axios from "axios";
// interface ICredentials {
//   username: string;
//   password: string;
// }

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const UserLogin = () => {
  const dispatch = useDispatch()
  const onFinish = ({ username, password }: any) => {
    console.log('Success:', username, password)
    axios
      .post(`${process.env.REACT_APP_API_URL}auth/local`, {
        identifier: username,
        password: password,
      })
      .then(({ data }) => {
        const { jwt, user } = data
        localStorage.setItem('token', jwt)
        dispatch(loginUser(user))
      })
      .catch((error) => {
        console.log('An error occurred:', error)
      })
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div>
      <p style={{ textAlign: "center" }}>Введите логин и пароль</p>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserLogin;
