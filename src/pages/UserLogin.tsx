import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginError, receiveLogin, loginRequest } from '../actions/auth';
//https://blog.strapi.io/protected-routes-and-authentication-with-react-and-node-js/

//https://medium.com/freecodecamp-russia-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D1%8F%D0%B7%D1%8B%D1%87%D0%BD%D1%8B%D0%B9/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-jwt-%D0%B2-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8-react-redux-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-585bfe1399b0
//https://levelup.gitconnected.com/using-jwt-in-your-react-redux-app-for-authorization-d31be51a50d2
//https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example
//https://www.youtube.com/watch?v=4T_P7wQhlMY
import { Form, Input, Button, Row, Typography } from 'antd';
import axios from 'axios';
const { Text } = Typography;
// interface ICredentials {
//   username: string;
//   password: string;
// }


const setUser = (user: object): any =>
  localStorage.setItem("user", JSON.stringify(user))

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const UserLogin = (props: any) => {
console.log(props);
  const dispatch = useDispatch();
  const [error, onGetError] = useState('');

  const onFinish = ({ username, password }: any) => {
    dispatch(loginRequest({ username, password }));
    axios
      .post(`${process.env.REACT_APP_API_URL}auth/local`, {
        identifier: username,
        password: password,
      })
      .then(({ data }) => {
        const { jwt, user } = data;
        localStorage.setItem('token', jwt);
        setUser(user);
        dispatch(receiveLogin(user));
        props.history.push('/');
      })
      .catch((e) => {
        // вызвать тут ошибку
        dispatch(loginError(e.message));
        onGetError(e.message);
        // console.log('An error occurred:', error)
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <p style={{ textAlign: 'center' }}>Введите логин и пароль</p>
      <Row justify="center">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Логин"
            name="username"
            rules={[{ required: true, message: 'Введите логин!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Введите пароль!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
            {error && (
              <div>
                <Text type="danger">{error}</Text>
              </div>
            )}
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};

export default UserLogin;

// const PROFILE_QUERY = gql`
//   query CurrentUserForLayout {
//     currentUser {
//       login
//       avatar_url
//     }
//   }
// `;

// function Profile() {
//   const { client, loading, data: { currentUser } } = useQuery(
//     PROFILE_QUERY,
//     { fetchPolicy: "network-only" }
//   );

//   if (loading) {
//     return <p className="navbar-text navbar-right">Loading...</p>;
//   }

//   if (currentUser) {
//     return (
//       <span>
//         <p className="navbar-text navbar-right">
//           {currentUser.login}
//           &nbsp;
//           <button
//             onClick={() => {
//               // call your auth logout code then reset store
//               App.logout().then(() => client.resetStore());
//             }}
//           >
//             Log out
//           </button>
//         </p>
//       </span>
//     );
//   }

//   return (
//     <p className="navbar-text navbar-right">
//       <a href="/login/github">Log in with GitHub</a>
//     </p>
//   );
// }
