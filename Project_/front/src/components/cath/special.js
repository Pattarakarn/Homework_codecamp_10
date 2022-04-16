import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Col, Form, InputNumber, Select, Row } from 'antd';


export default function Special() {

    const [form] = Form.useForm();

    const col = ['ivus', 'oct', 'ffrifr', 'rotablator', 'pericardiocentasis', 'cardioversion']
    localStorage.setItem('col_special', JSON.stringify(col))
    const column = col.map((rank) => {
        const Rank = rank.toUpperCase()
        return { label: Rank, value: rank }
    })

    const [list6, input6] = useState('')
    const [amount6, num6] = useState('')
    const [list7, input7] = useState('')
    const [amount7, num7] = useState('')
    const [list8, input8] = useState('')
    const [amount8, num8] = useState('')
    const [list9, input9] = useState('')
    const [amount9, num9] = useState('')
    const [list10, input10] = useState('')
    const [amount10, num10] = useState('')


    useEffect(() => {
        const getVal = (form.getFieldValue())
        const amount = Object.values(getVal)
        const sum = (amount.reduce((sum, amount) => sum + amount, 0))

        localStorage.setItem('val_special', JSON.stringify(getVal))
        localStorage.setItem('special', JSON.stringify(sum))
    })

    return (
        <div style={{}} className="site-layout-content">
            <Form form={form}>
                {/* <Layout> */}
                {/* <Row> */}
                {/* <Col span={12}> */}
                <div style={{ backgroundColor: '', borderRadius: '10px' }}>
                    <Row gutter={[4, 16]}>
                        <Col span={13}>
                            <Select style={{ display: 'inline-block', width: '80%', backgroundColor: 'pink' }}
                                options={column}
                                onChange={(e) => input6(e)}
                            />
                        </Col>
                        <Col>
                            <Form.Item name={list6} style={{ display: 'inline-flex' }}>
                                <InputNumber min={0}
                                    style={{ paddingLeft: '12px', color: '#cc0000' }}
                                    onChange={(e) => num6(e)}
                                    value={amount6}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[4, 16]}>
                        <Col span={13}>
                            <Select style={{ display: 'inline-block', width: '80%', backgroundColor: 'pink' }}
                                options={column}
                                onChange={(e) => input7(e)}
                            />
                        </Col>
                        <Col>
                            <Form.Item name={list7} style={{ display: 'inline-flex' }}>
                                <InputNumber min={0}
                                    style={{ paddingLeft: '12px', color: '#cc0000' }}
                                    onChange={(e) => num7(e)}
                                    value={amount7}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[4, 16]}>
                        <Col span={13}>
                            <Select style={{ display: 'inline-block', width: '80%', backgroundColor: 'pink' }}
                                options={column}
                                onChange={(e) => input8(e)}
                            />
                        </Col>
                        <Col>
                            <Form.Item name={list8} style={{ display: 'inline-flex' }}>
                                <InputNumber min={0}
                                    style={{ paddingLeft: '12px', color: '#cc0000' }}
                                    onChange={(e) => num8(e)}
                                    value={amount8}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[4, 16]}>
                        <Col span={13}>
                            <Select style={{ display: 'inline-block', width: '80%' }}
                                options={column}
                                onChange={(e) => input9(e)}
                            />
                        </Col>
                        <Col>
                            <Form.Item name={list9} style={{ display: 'inline-flex' }}>
                                <InputNumber min={0}
                                    style={{ paddingLeft: '12px', color: '#cc0000' }}
                                    onChange={(e) => num9(e)}
                                    value={amount9}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* <Row gutter={[4, 16]}>
                    <Col span={13}>
                        <Input style={{ width: '80%', border: 'none' }}
                        placeholder='อื่นๆ .'
                            options={column}
                            onChange={(e) => input10(e)}
                        />
                    </Col>
                    <Col>
                        <Form.Item name={list10} style={{ display: 'inline-flex' }}>
                            <InputNumber min={0}
                                style={{ paddingLeft: '12px', border: 'none' }}
                                onChange={(e) => num10(e)}
                                value={amount10}
                                placeholder='จำนวน'
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[4, 16]}>
                    <Col span={13}>
                        <Input style={{ width: '80%', border: 'none' }}
                            options={column}
                            placeholder='อื่นๆ ..'
                            onChange={(e) => input10(e)}
                        />
                    </Col>
                    <Col>
                        <Form.Item name={list10} style={{ display: 'inline-flex' }}>
                            <InputNumber min={0}
                                style={{ paddingLeft: '12px', border: 'none' }}
                                onChange={(e) => num10(e)}
                                value={amount10}
                                placeholder='จำนวน'
                            />
                        </Form.Item>
                    </Col>
                </Row> */}
                </div>
                {/* </Col> */}
                {/* </Row> */}
                {/* </Layout> */}
            </Form>
        </div>
    )
}