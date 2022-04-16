import React, { useState, useEffect } from 'react';
import { Form, Space, Input, Button, Col, Layout, List, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from "../../config/axios";

const { Sider } = Layout;

export default function ListOr() {
    const [form] = Form.useForm();

    const colum = localStorage.getItem('columnOR')
    const column = (JSON.parse(colum)).slice(1)

    const onFinish = values => {
        console.log(values[''][0])
        const val = (values[''][0])
        axios.post("/orlist", { val });
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

    // OPCAB: req.body.opcab,
    //     CABG: req.body.cabg,
    //     CABGnValve: req.body.cabg_valve,
    //     Valve_s: req.body.valves,
    //     TEVAR: req.body.tevar,
    //     TAVR: req.body.tavr,
    //     VATS: req.body.vats,
    //     pericardial_: req.body.pericardial,
    //     re_operation: req.body.reop,
    //     other: req.body.other,

    const ind=['opcab', 'cabg_valve', 'valves', 'tevar', 'tavr', 'vats', 'pericardial', 'reop', 'other']

    return (
        <div className="site-layout-content" style={{ width: '400px' }}>
            <Col span={12} offset={6}>

                <p>OR List</p>

                <List
                    // bordered
                    dataSource={column}
                    renderItem={item => (
                        <li>{item}</li>
                    )}
                />
                <br />
                {/* <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                    <Form.List name=''>
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(field => (
                                    <Space key={field.key} align="baseline">
                                        <Form.Item
                                            {...field}
                                            // label="List"
                                            name={[field.name, 'other']}
                                        >
                                            <Input
                                                style={{ minWidth: '180px', borderRadius: '5px' }}
                                            // onChange={(e) => setInputList(e)}
                                            />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => { remove(field.name); }} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => { add(); update() }}
                                        block icon={<PlusOutlined />} style={{ color: "#7ED3B2", borderColor: '#7ED3B2', width: changeWidth }}>
                                        Add List
                                    </Button>
                                    <Button htmlType="submit" style={{ display: visible }} >Update</Button>
                                </Form.Item>
                                // <Popconfirm
                                // placement="rightTop"
                                // title='ข้อมูลจะถูกอัพเดทโดยคุณ'
                                // okText="ตกลง"
                                // cancelText="ยกเลิก"
                                // onCancel={() => {message.info('ยกเลิกการอัพเดทข้อมูล');} }
                                // >
                                // </Popconfirm>
                            </>
                        )}
                    </Form.List>
                </Form> */}
            </Col>
        </div>
    )
}
