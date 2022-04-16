import React from 'react';
import { Divider, Button, Row, Col, Card, Layout } from 'antd';
import Login from '../general/login';
import Register from '../general/register';
import { CloseOutlined } from '@ant-design/icons';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayL: false,
            displayR: false
        }
    }

    loginForm() {
        this.setState(() => ({
            displayL: !this.state.displayL
        }))
    }

    registerForm() {
        this.setState(() => ({
            displayR: !this.state.displayR
        }))
    }

    render() {
        return (
            <Layout style={{ padding: '100px', backgroundColor: 'lightslategrey', height: '100vh' }}>
                <Card style={{ borderRadius: '15px' }}>

                    <h2>CCVC's Data</h2>
                    <Row>
                        <Col span={12}>
                            <Button onClick={() => this.loginForm()}>Login</Button>
                        </Col>
                        <Col span={12}>
                            <Button onClick={() => this.registerForm()}>Register</Button>
                        </Col>
                    </Row>

                    {this.state.displayL &&
                        <div>
                            <Divider orientation="left">
                                <CloseOutlined onClick={() => this.loginForm()} />
                            </Divider>
                            <Login />
                        </div>
                    }

                    {this.state.displayR &&
                        <div>
                            <Divider orientation="right">
                                <CloseOutlined onClick={() => this.registerForm() } />
                            </Divider>
                            <Register />
                        </div>
                    }

                    <Divider />

                </Card>
            </Layout>
        );
    }
}
