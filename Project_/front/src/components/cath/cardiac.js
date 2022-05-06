import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Col, Form, Select, InputNumber, Row, Input } from 'antd';


export default function Cardiac() {
    const col = ['cag', 'pci', 'cagpci', 'aortogram', 'leftrightHC', 'asd', 'vsd', 'tavr', 'iabp', 'cpr']

    const column = col.map((rank) => {
        const Rank = rank.toUpperCase()
        return { label: Rank, value: rank }
    })

    const [list1, input1] = useState('')
    const [amount1, num1] = useState('0')
    const [list2, input2] = useState('')
    const [amount2, num2] = useState('0')
    const [list3, input3] = useState('')
    const [amount3, num3] = useState('0')
    const [list4, input4] = useState('')
    const [amount4, num4] = useState('0')
    const [list5, input5] = useState('')
    const [amount5, num5] = useState('0')
    const [list, input] = useState('')
    const [amount, num] = useState('0')

    // const lists = localStorage.getItem('allCath')
    // const cathL = JSON.parse(lists)
    // const Opt = cathL.map((rank, i, row) => {
    //     if (i + 1 !== 0) {
    //         return (rank.date)
    //         // return localStorage.setItem('columN', JSON.stringify(Object.keys(rank)));
    //     }
    // })

    useEffect(() => {
            const getVal = ( form.getFieldValue() )
            const amount = Object.values(getVal)
            const sum = (amount.reduce((sum, amount) => sum + amount, 0))
            
            localStorage.setItem('val_cardiac', JSON.stringify(getVal))
            localStorage.setItem('cardiac', JSON.stringify(sum))
    })

    const [form] = Form.useForm();

    return (
        <div style={{}} className="site-layout-content">
            <Form form={form}>
            <Row gutter={[16, 16]}>
                <Col span={14}>
                    <Select
                        style={{ display: 'inline-block', width: '80%', color: '#cc0000' }}
                        options={column}
                        onChange={(e) => input1(e)}

                    />
                </Col>
                <Col>
                    <Form.Item name={list1} style={{ display: 'inline-flex' }}>
                        <InputNumber min={0}
                            style={{ paddingLeft: '12px', color: '#cc0000' }}
                            onChange={(e) => { num1(e); }}
                            value={amount1}
                            
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={14}>
                    <Select style={{ display: 'inline-block', width: '80%', color: '#cc0000' }}
                        options={column}
                        onChange={(e) => input2(e)}

                    />
                </Col>
                <Col>
                    <Form.Item name={list2} style={{ display: 'inline-flex' }}>
                        <InputNumber min={0}
                            style={{ paddingLeft: '12px', color: '#cc0000' }}
                            onChange={(e) => { num2(e); }}
                            value={amount2}
                            
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={14}>
                    <Select style={{ display: 'inline-block', width: '80%', color: '#cc0000' }}
                        options={column}
                        onChange={(e) => input3(e)}
                    />
                </Col>
                <Col>
                    <Form.Item name={list3} style={{ display: 'inline-flex' }}>
                        <InputNumber min={0}
                            style={{ paddingLeft: '12px', color: '#cc0000' }}
                            onChange={(e) => num3(e)}
                            value={amount3}
                            
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={14}>
                    <Select style={{ display: 'inline-block', width: '80%', color: '#cc0000' }}
                        options={column}
                        onChange={(e) => input4(e)}
                    />
                </Col>
                <Col>
                    <Form.Item name={list4} style={{ display: 'inline-flex' }}>
                        <InputNumber min={0}
                            style={{ paddingLeft: '12px', color: '#cc0000' }}
                            onChange={(e) => num4(e)}
                            value={amount4}
                            
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={14}>
                    <Select style={{ display: 'inline-block', width: '80%', color: '#cc0000' }}
                        options={column}
                        onChange={(e) => input5(e)}
                    />
                </Col>
                <Col>
                    <Form.Item name={list5} style={{ display: 'inline-flex' }}>
                        <InputNumber min={0}
                            style={{ paddingLeft: '12px', color: '#cc0000' }}
                            onChange={(e) => num5(e)}
                            value={amount5}
                            
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={14}>
                    <Select style={{ display: 'inline-block', width: '80%',  color: '#cc0000' }}
                        options={column}
                        onChange={(e) => input(e)}
                    />
                </Col>
                <Col>
                    <Form.Item name={list} style={{ display: 'inline-flex', border: 'none' }}>
                        <InputNumber min={0}
                            style={{ paddingLeft: '12px', color: '#cc0000' }}
                            onChange={(e) => num(e)}
                            value={amount}
                        />
                    </Form.Item>
                </Col>
            </Row>
            {/* <Row gutter={[16, 16]}>
                    <Input style={{ display: 'inline-block', width: '80%', border: 'none' }}
                        placeholder='อื่นๆ'
                        onChange={(e) => input(e)}
                    />
            </Row>
            <Row gutter={[16, 16]}>
                <Form.Item name={list} label='จำนวน' style={{ display: 'inline-flex' , border: 'none' }}>
                    <InputNumber min={0}
                        style={{ paddingLeft: '12px'}}
                        onChange={(e) => num(e)}
                        value={amount}
                    />
                </Form.Item>
            </Row> */}
            </Form>
        </div>
    )
}