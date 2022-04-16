import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Col, Form, InputNumber, Select, Row } from 'antd';

export default function Ep() {

    const [form] = Form.useForm();

    const col = ['eps','epsablation','epsablation3D','pacemaker','aicd','crt','crtd']
    localStorage.setItem('col_ep', JSON.stringify(col))
    const column = col.map((rank) => {
        const Rank = rank.toUpperCase()
        return { label: Rank, value: rank }
    })

    const [list11, input11] = useState('')
    const [amount11, num11] = useState('')
    const [list12, input12] = useState('')
    const [amount12, num12] = useState('')
    const [list13, input13] = useState('')
    const [amount13, num13] = useState('')
    const [list14, input14] = useState('')
    const [amount14, num14] = useState('')
    const [list15, input15] = useState('')
    const [amount15, num15] = useState('')

    useEffect(() => {
        const getVal = ( form.getFieldValue() )
        const amount = Object.values(getVal)
        const sum = (amount.reduce((sum, amount) => sum + amount, 0))
        
        localStorage.setItem('val_ep', JSON.stringify(getVal))
        localStorage.setItem('ep', JSON.stringify(sum))
})

    return (
        <div className="site-layout-content">
<Form form={form}>
            {/* <Layout> */}
            <Row gutter={[16, 16]}>
                <Col span={14}>
                    <Select style={{ width: '80%', color: 'cornflowerblue' }}
                        options={column}
                        onChange={(e) => input11(e)}
                    />
                </Col>
                <Col>
                    <Form.Item name={list11} >
                        <InputNumber min={0}
                            style={{ paddingLeft: '18px', color: 'cornflowerblue' }}
                            onChange={(e) => { num11(e); }}
                            value={amount11}
                            
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={14}>
                    <Select style={{ width: '80%', color: 'cornflowerblue' }}
                        options={column}
                        onChange={(e) => input12(e)}
                    />
                </Col>
                <Col>
                    <Form.Item name={list12} style={{ display: 'inline-flex' }}>
                        <InputNumber min={0}
                            style={{ paddingLeft: '18px', color: 'cornflowerblue' }}
                            onChange={(e) => { num12(e); }}
                            value={amount12}
                            
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={14}>
                    <Select style={{ width: '80%', color: 'cornflowerblue' }}
                        options={column}
                        onChange={(e) => input13(e)}
                    />
                </Col>
                <Col>
                    <Form.Item name={list13} style={{ display: 'inline-flex' }}>
                        <InputNumber min={0}
                            style={{ paddingLeft: '18px', color: 'cornflowerblue' }}
                            onChange={(e) => num13(e)}
                            value={amount13}
                            
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={14}>
                    <Select style={{ width: '80%', color: 'cornflowerblue' }}
                        options={column}
                        onChange={(e) => input14(e)}
                    />
                </Col>
                <Col>
                    <Form.Item name={list14} style={{ display: 'inline-flex' }}>
                        <InputNumber min={0}
                            style={{ paddingLeft: '18px', color: 'cornflowerblue' }}
                            onChange={(e) => num14(e)}
                            value={amount14}
                            
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={14}>
                    <Select style={{ width: '80%', color: 'cornflowerblue' }}
                        options={column}
                        onChange={(e) => input15(e)}
                    />
                </Col>
                <Col>
                    <Form.Item name={list15} style={{ display: 'inline-flex' }}>
                        <InputNumber min={0}
                            style={{ paddingLeft: '18px', color: 'cornflowerblue' }}
                            onChange={(e) => num15(e)}
                            value={amount15}
                            
                        />
                    </Form.Item>
                </Col>
            </Row>
            {/* </Layout> */}
</Form>
        </div>
    )
}