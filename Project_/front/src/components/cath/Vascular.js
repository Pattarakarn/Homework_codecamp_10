import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Col, Form, InputNumber, Select, Row } from 'antd';

export default function Vascular() {

    const col = ['pta', 'ptastent']
    localStorage.setItem('col_vascular', JSON.stringify(col))
    const column = col.map((rank) => {
        const Rank = rank.toUpperCase()
        return { label: Rank, value: rank }
    })

    const [list1, input1] = useState('')
    const [amount1, num1] = useState('')
    const [list2, input2] = useState('')
    const [amount2, num2] = useState('')
    const [list0, input0] = useState('')
    const [amount0, num0] = useState('')

    useEffect(() => {
        const getVal = (form.getFieldValue())
        const amount = Object.values(getVal)
        const sum = (amount.reduce((sum, amount) => sum + amount, 0))

        localStorage.setItem('val_vascular', JSON.stringify(getVal))
        localStorage.setItem('vascular', JSON.stringify(sum))
    })

    const [form] = Form.useForm();

    return (
        <div style={{}} className="site-layout-content">
            <Form form={form}>
                <Row gutter={[4, 16]}>
                    <Col span={13}>
                        <Select style={{ width: '80%' }}
                            options={column}
                            onChange={(e) => input1(e)}
                        />
                    </Col>
                    <Col>
                        <Form.Item name={list1} style={{ display: 'inline-flex' }}>
                            <InputNumber min={0}
                                style={{ paddingLeft: '18px', width: '70px', border: 'none' }}
                                onChange={(e) => num1(e)}
                                value={amount1}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[4, 16]}>
                    <Col span={13}>
                        <Select style={{ width: '80%' }}
                            options={column}
                            onChange={(e) => input2(e)}
                        />
                    </Col>
                    <Col >
                        <Form.Item name={list2} style={{ display: 'inline-flex' }}>
                            <InputNumber min={0}
                                style={{ paddingLeft: '18px', width: '70px', border: 'none' }}
                                onChange={(e) => num2(e)}
                                value={amount2}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                {/* <Row gutter={[4, 16]}>
                <Col span={13}>
                    <AutoComplete style={{ width: '80%'  }}
                        options={column}
                        onChange={(e) => input0(e)}
                    />
                </Col>
                <Col >
                    <Form.Item name={list0} style={{ display: 'inline-flex' }}>
                        <InputNumber min={0}
                            style={{ paddingLeft: '18px', width: '70px', border: 'none' }}
                            onChange={(e) => num0(e)}
                            value={amount0}
                            placeholder='0'
                        />
                    </Form.Item>
                </Col>
            </Row> */}
            </Form>
        </div >
    )
}