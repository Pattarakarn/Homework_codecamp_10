import React from 'react';
import { Button, Input, Form, notification } from 'antd';
import axios from '../../config/axios';
import LocalStorageService from '../../services/localStorageService';

export default function Login() {

    const onFinish = values => {
        const body = {
            username: values.username,
            password: values.password,
        };
        axios.post("/users/login", body)
            .then(result => {
                LocalStorageService.setToken(result.data.token);
                localStorage.setItem('code', result.data.department);
                notification.success({ message: `${result.data.department}` });
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
                notification.error({
                    message: `กรุณาเข้าสู่ระบบอีกครั้ง`,
                });
            });
        console.log('Success', values);
        localStorage.setItem('username', values.username)
    };

    return (
        <div id="form" className="site-layout-content" >
            <Form onFinish={onFinish}>
                <Form.Item
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Button htmlType="submit" type="primary"> Login</Button>
            </Form >
        </div >
    );
};
