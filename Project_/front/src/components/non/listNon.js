import React, { useState, useEffect } from 'react';
import { Form, Space, Input, Button, Col, Layout, List, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from "../../config/axios";

const { Sider } = Layout;

export default function ListNon() {
    const [form] = Form.useForm();

    const colum = localStorage.getItem('columN')
    const column = (JSON.parse(colum)).slice(4,-2)

    const onFinish = values => {
        console.log(values)
        // confirm({
        //     title: 'ยืนยันรายการบันทึกของวันนี้',
        //     icon: <ExclamationCircleOutlined />,
        //     content: (Date),
        //     onOk() {
        //         const list = JSON.parse(localStorage.list)
        //         const List = list.slice(1)

        //         const amount = JSON.parse(localStorage.amount)
        //         const Amount = amount.slice(1)
        //         const sum = Amount.reduce((total, value) => total = total + parseInt(value), 0);

        //         axios.post("/cathlist", { list: JSON.stringify(List), amount: JSON.stringify(Amount), date: Date });
        //         axios.post("/sum", { detail: JSON.stringify(values), total: sum, customer: customer });
        //         fetchRecord();
        //         console.log('บันทึก');
        //     },
        //     onCancel() {
        //         console.log('ยกเลิก');
        //     },
        // });
    };

    const [changeWidth, width] = useState('220px');
    const [visible, change] = useState('none');

    const update = () => {
        width('168px')
        change('')
    }

    return (
        <div className="site-layout-content">

            <p>Non-Invasive List</p>

            <List
                bordered
                dataSource={column}
                renderItem={item => (
                    <li>{item}</li>
                )}
            />

            <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                <Form.List name={Date}>
                    {(fields, { add, remove }) => (
                        <>


                            {fields.map(field => (
                                <Col span={12} offset={6}>
                                    <Space key={field.key} align="baseline">
                                        <Form.Item
                                            {...field}
                                            // label="List"
                                            name={[field.name, 'list']}
                                        >
                                            <Input
                                                style={{ minWidth: '180px', borderRadius: '5px' }}
                                            // onChange={(e) => setInputList(e)}
                                            />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => { remove(field.name); }} />
                                    </Space>
                                </Col>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => { add(); update() }}
                                    block icon={<PlusOutlined />} style={{ color: "#7ED3B2", borderColor: '#7ED3B2', width: changeWidth }}>
                                    Add List
                                </Button>
                                <Button style={{ display: visible }}>Update</Button>
                            </Form.Item>

                        </>
                    )}

                </Form.List>
            </Form>
        </div>
    )
}
