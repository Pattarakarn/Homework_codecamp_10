import { Tabs, Row, Col, Menu, Button, Layout, } from 'antd';
import React from 'react';
import LocalStorageService from '../../services/localStorageService';
import { useHistory } from 'react-router-dom';

const { Header } = Layout;
const { TabPane } = Tabs;

function Heads(props) {

  const history = useHistory();

  const logout = () => {
    LocalStorageService.removeToken();
    // props.setRole("guest");
  };

  const name = localStorage.getItem('username')

  return (
    <div >

      <Header>
      <Menu theme="dark" mode="horizontal" >
        <Row justify="space-around">
          <Col span={16}>
            <Menu.Item key="4">K. {name} </Menu.Item>
          </Col>

          <Col span={8} >
            <Button className="d-flex justify-content-flex-end"
              onclick={logout}>Log out</Button>
          </Col>
        </Row>
      </Menu>
      </Header>

    </div>
  )
}

export default Heads;

