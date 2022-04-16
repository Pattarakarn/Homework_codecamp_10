import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Select, Form, InputNumber, Row, Col } from 'antd';


export default function Neuro() {

    const col = ['embolization', 'coil']
    localStorage.setItem('col_neuro', JSON.stringify(col))
    const column = col.map((rank) => {
        const Rank = rank.charAt(0).toUpperCase() + rank.slice(1)
        return { label: Rank, value: rank }
    })

    const [list16, input16] = useState('')
    const [amount16, num16] = useState('')
    const [list17, input17] = useState('')
    const [amount17, num17] = useState('')
    const [list18, input18] = useState('')
    const [amount18, num18] = useState('')

    const [form] = Form.useForm();
    
    useEffect(() => {
        const getVal = ( form.getFieldValue() )
        const amount = Object.values(getVal)
        const sum = (amount.reduce((sum, amount) => sum + amount, 0))
        
        localStorage.setItem('val_neuro', JSON.stringify(getVal))
        localStorage.setItem('neuro', JSON.stringify(sum))
})

    return (
        <div style={{}} className="site-layout-content">
            <Form form={form} >
                <Row gutter={[4, 16]}>
                    <Col span={13}>
                        <Select style={{ width: '80%' }}
                            options={column}
                            onChange={(e) => input16(e)}
                        />
                    </Col>
                    <Col>

                        <Form.Item name={list16} style={{ display: 'inline-flex' }}>
                            <InputNumber min={0}
                                style={{ paddingLeft: '18px', width: '70px', border: 'none' }}
                                onChange={(e) => { num16(e); }}
                                value={amount16}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[4, 16]}>
                    <Col span={13}>
                        <Select style={{ width: '80%' }}
                            options={column}
                            onChange={(e) => input17(e)}
                        />
                    </Col>
                    <Col>
                        <Form.Item name={list17} style={{ display: 'inline-flex' }}>
                            <InputNumber min={0}
                                style={{ paddingLeft: '18px', width: '70px', border: 'none' }}
                                onChange={(e) => { num17(e); }}
                                value={amount17}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                {/* <Row gutter={[4, 16]}>
                <Col span={13}>
                    <AutoComplete style={{ width: '80%' }}
                        options={column}
                        onChange={(e) => input18(e)}
                    />
                </Col>
                <Col>
                    <Form.Item name={list18} >
                        <InputNumber min={0}
                            style={{ paddingLeft: '18px', width: '70px', border: 'none' }}
                            onChange={(e) => num18(e)}
                            value={amount18}
                            placeholder='0'
                        />
                    </Form.Item>
                </Col>
            </Row> */}
            </Form>

        </div>
    )
}