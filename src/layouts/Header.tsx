import React from 'react';
import { Layout, Row, Col, Avatar } from 'antd';
import { Menu } from 'antd';
import { useDispatch, useStore } from 'react-redux';
import { logoutUser } from '../actions/auth';
import { useHistory } from 'react-router-dom';
const { SubMenu } = Menu;

const Header = (props: any) => {
  console.log(props);
  const store = useStore();
  const history = useHistory();
  const { isAuthenticated, currentUser } = store.getState().auth;
  const dispatch = useDispatch();
  const { username } = currentUser;

  const logout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('token');
    history.push('/');
  };
  return (
    <div>
      <Layout.Header
        style={{ margin: '0 16px 6px 16px', padding: 0 }}
        className="site-layout-background"
      >
        <Row justify="end">
          <Col>
            <Menu mode="horizontal">
              <SubMenu
                title={
                  <Avatar
                    style={{
                      backgroundColor: '#ffbf00',
                      verticalAlign: 'left',
                    }}
                    size="large"
                  >
                    {username}
                  </Avatar>
                }
              >
                {isAuthenticated && (
                  <Menu.Item onClick={logout} key="setting:1">
                    Выйти
                  </Menu.Item>
                )}
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
    </div>
  );
};

export default Header;
