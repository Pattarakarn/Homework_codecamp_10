import React, { useState, useEffect } from 'react';
import { Form, Space, Input, Button, Col, Layout, List, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from "../../config/axios";
import Head from "../general/head";
import Foot from '../general/footer';

const { Sider } = Layout;

export default function ListCath() {

    const [form] = Form.useForm();

    const colum = localStorage.getItem('Column')
    const column = (JSON.parse(colum)).slice(4, -2)

    const onFinish = values => {
        // const config = {
        //     headers: {
        //         headerName: 3
        //     }
        // }
        // axios.post('/cathlist', values, config)
        // console.log(config)
        axios.get('/cathlist/',).then((res) => {
            console.log(res)
        })
        // confirm({
        //     title: 'ยืนยันรายการบันทึกของวันนี้',
        //     icon: <ExclamationCircleOutlined />,
        //     content: (Date),
        //     onOk() {

        //         axios.post("/cathlist", { list: JSON.stringify(List), amount: JSON.stringify(Amount), date: Date });
        //         axios.post("/sum", { detail: JSON.stringify(values), total: sum, customer: customer });
        //         fetchRecord();
        //         console.log('บันทึก');
        // window.location.reload()
        //     },
        //     onCancel() {
        //         console.log('ยกเลิก');
        //     },
        // });
    };

    const [display, display_] = useState('');
    const [displayS, displays] = useState('');
    const [visible, change] = useState('none');

    const update = () => {
        display_('none')
        change('')
    }
    const updates = () => {
        displays('none')
        change('')
    }

    return (
        <div className="site-layout-content">

            <p>Cath-Lab List</p>

            <List
                bordered
                dataSource={column}
                renderItem={item => (
                    <li>{item}</li>
                )}
            />

            <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                <Form.List name='procedure'>
                    {(fields, { add, remove }) => (
                        <>

                            {fields.map(field => (
                                <Col span={12} offset={6}>
                                    <Space key={field.key} align="baseline">
                                        <Form.Item
                                            {...field}
                                        // label="List"
                                        // name={[field.name, 'list']}
                                        >
                                            <Input
                                                style={{ minWidth: '180px', borderRadius: '5px' }}
                                                placeholder='add procedure'
                                            // onChange={(e) => setInputList(e)}
                                            />
                                        </Form.Item>
                                    </Space>
                                </Col>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => { add(); update() }}
                                    block icon={<PlusOutlined />} style={{ color: "#7ED3B2", borderColor: '#7ED3B2', display: display, width: '220px' }}>
                                    Procedure
                                </Button>
                                <Button style={{ display: visible }} htmlType='submit' >Update</Button>
                            </Form.Item>

                        </>
                    )}
                </Form.List>

                <List
                    bordered
                    dataSource={column}
                    renderItem={item => (
                        <li>{item}</li>
                    )}
                />

                <Form.List name='special'>
                    {(fields, { add, remove }) => (
                        <>

                            {fields.map(field => (
                                <Col span={12} offset={6}>
                                    <Space key={field.key} align="baseline">
                                        <Form.Item
                                            {...field}
                                        // label="List"
                                        // name={[field.name, 'list']}
                                        >
                                            <Input
                                                style={{ minWidth: '180px', borderRadius: '5px' }}
                                                placeholder='add special procedure'
                                            // onChange={(e) => setInputList(e)}
                                            />
                                        </Form.Item>
                                    </Space>
                                </Col>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => { add(); updates() }}
                                    block icon={<PlusOutlined />} style={{ color: "#7ED3B2", borderColor: '#7ED3B2', display: displayS, width: '220px' }}>
                                    Special Procedure
                                </Button>
                                <Button style={{ display: visible }} htmlType='submit' >Update</Button>
                            </Form.Item>

                        </>
                    )}

                </Form.List>
            </Form>
        </div>
    )
}
