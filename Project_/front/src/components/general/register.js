import React from 'react';
import { Button, Input, Form, notification, Select } from 'antd';
import axios from '../../config/axios';
import { withRouter } from 'react-router-dom';

function Register(props) {
    const onFinish = values => {
        console.log('Received values of form: ', values);
        const body = {
            code: values.code,
            username: values.username,
            password: values.password
        };
        axios.post("/users/register", body)
            .then(res => {
                notification.success({
                    message: `คุณ ${values.username} ได้สมัครสมาชิกเรียบร้อยแล้ว`,
                });
                props.history.push("/home");
            })
            .catch(err => {
                notification.error({
                    message: `กรุณาสมัครสมาชิกใหม่`,
                });
            });
    };

    return (
        <div className="form">
            <Form onFinish={onFinish}>
                <Form.Item label="Code" name="code"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 6 }}
                >
                    <Select>
                        <Select.Option value="OPD">OPD</Select.Option>
                        <Select.Option value="Non-invasive">Non-invasive</Select.Option>
                        <Select.Option value="Cath-Lab">Cath-Lab</Select.Option>
                        <Select.Option value="OR">OR</Select.Option>
                        <Select.Option value="Supervisor">Supervisor</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                    label="Username"
                    name="username"
                    required
                    rules={[{ required: true, message: 'Please input!' },
                    {
                        max: 20,
                        message: "Please input less than 20 character",
                    },
                    {
                        min: 2,
                        message: "Please input more than 2 character",
                    }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Button htmlType="submit" type="primary" > Register </Button>
            </Form>
        </div>
    );
};

export default withRouter(Register);
