import { Row, Col, Menu, Button, Layout, } from 'antd';
import React from 'react';
import LocalStorageService from '../../services/localStorageService';
import { useHistory } from 'react-router-dom';

const { Header } = Layout;

function Heads(props) {

  const history = useHistory();

  const logout = () => {
    LocalStorageService.removeToken();
    window.location.reload()
    // props.setRole("guest");
  };

  const name = localStorage.getItem('username')

  return (
    <div >

      <Header>
        <Row justify="space-around">
          <Col span={18}>
            <Menu theme="dark" mode="horizontal" >
              <Menu.Item key="4">K. {name} </Menu.Item>
            </Menu>
          </Col>

          <Col span={6} >
            <Button className="d-flex justify-content-flex-end"
              onClick={logout}>Log out</Button>
          </Col>
        </Row>
      </Header>

    </div>
  )
}

export default Heads;

