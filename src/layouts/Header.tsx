import React from 'react';
import { Layout, Row, Col, Avatar } from "antd";
import { Menu } from 'antd'
import { Divider } from 'antd'

const { SubMenu } = Menu

const Header = () => {

    const user = 'Name'

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
                      {user}
                    </Avatar>
                  }
                >
                  <Menu.Item key="setting:1">Выйти</Menu.Item>
                </SubMenu>
              </Menu>
            </Col>
          </Row>
        </Layout.Header>
      </div>
    )
}

export default Header;
