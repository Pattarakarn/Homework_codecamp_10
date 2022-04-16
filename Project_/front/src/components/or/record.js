import React, { useState } from "react";
import axios from "../../config/axios";
import 'antd/dist/antd.css';
import { Row, Col, Alert, Button, Form, Modal, AutoComplete, Select, InputNumber, Input } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import moment from "moment";

const { confirm } = Modal;

export default function OrForm() {

    const Date = moment().format('D-MMM-YYYY');
    const [form] = Form.useForm();
    const [customer, inputCustomer] = useState("");

    const op = localStorage.getItem('columnOR')
    const Opt = JSON.parse(op)
    const header = Opt.map((rank) => {
        const Rank = rank.toUpperCase()
        return { value: rank, label: Rank }
    })

    const [list1, input1] = useState('')
    const [amount1, num1] = useState('')
    const [list2, input2] = useState('')
    const [amount2, num2] = useState('')
    const [list3, input3] = useState('')
    const [amount3, num3] = useState('')
    const [list4, input4] = useState('')
    const [amount4, num4] = useState('')
    const [list5, input5] = useState('')
    const [amount5, num5] = useState('')
    const [other, input] = useState('')
    const [amount, num] = useState('')

    const [dateRec, dateR] = useState()

    const onFinish = values => {
        const allAmount = [amount1, amount2, amount3, amount4, amount5, amount]
        const totals = allAmount.reduce((sum, amount) => sum + amount, 0)
        const obj = {}
        obj['total'] = totals
        const value = Object.assign(values, obj)
        console.log(value) // = values
console.log(moment(dateRec) >= moment())
        if (dateRec == Date) {
            confirm({
                title: 'ยืนยันรายการบันทึกของวันนี้',
                icon: <ExclamationCircleOutlined />,
                content: (Date),
                onOk() {
                    axios.post("/orlist", values);
                    window.location.reload()
                    console.log('บันทึก');
                },
                onCancel() {
                    console.log('ยกเลิก');
                },
            });
        } else if (dateRec == date) {
            confirm({
                title: 'ยืนยันรายการบันทึกของเมื่อวาน', 
                content: date,
                onOk() {
                    axios.post("/orlist", values); 
                    window.location.reload()
                },
            });
        } else if (moment(dateRec)._isValid) {
            confirm({
                title: 'ยืนยันรายการบันทึก', 
                content: (values.date),
                onOk() {
                    axios.post("/orlist", values);
                    window.location.reload()
                },
            });
        };
    }

    const list = localStorage.getItem('allOr')
    const orL = JSON.parse(list) || []

    const date = moment().subtract(1, 'd').format('D-MMM-YYYY')

    const option = [{ value: Date }, { value: date }]
    const [show, display] = useState('')

    const alert = (
        <Alert
            description="รายการของวันที่เลือกได้ถูกบันทึกแล้ว"
            type="error"
        />
    )

    const dateOpt = orL.map((rank, i) => {
        if (i + 1 !== 0) {
            return (rank.date)
        }
    })

    return (

        <div className="site-layout-content">
            <Form form={form} onFinish={onFinish}>
                <Form.Item name='date'>
                    <AutoComplete placeholder='เลือกวันที่บันทึก'
                        options={option}
                        
                        onChange={(e) => { dateR(e); }}
                        style={{ width: '10em', borderColor: '#7ED3B2' }}
                    />
                </Form.Item>
                {dateOpt.includes(dateRec) ?
                    alert
                    :
                    <div style={{ display: show }}>
                        <Row>
                            <Col span={9} offset={7}>
                                <Form.Item name="customer" label='ผู้เข้ารับบริการ (ราย)' style={{ paddingLeft: '30px' }}>
                                    <InputNumber min={0}
                                        style={{
                                            width: '6em', textAlign: 'center', paddingLeft: '22px',
                                            borderColor: '#7ED3B2', borderTop: 'none', borderLeft: 'none', borderRight: 'none'
                                        }}
                                        value={customer}
                                        onChange={(e) => { inputCustomer(e); }}
                                        required
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Col span={12} offset={6}>
                            <div style={{ backgroundColor: '#F2F2F2', padding: '30px 15px', borderRadius: '15px' }}>
                                <Row gutter={[16, 16]}>
                                    <Col span={12} push={2}>
                                        <Select
                                            style={{ display: 'inline-block', width: '100%', color: '#7ED3B2' }}
                                            // style={{ width: '222px', display: 'inline-flex' }}
                                            options={header}
                                            onChange={(e) => input1(e)}
                                            placeholder='รายการ'
                                        />
                                    </Col>
                                    <Col push={2}>
                                        <Form.Item name={list1} style={{ display: 'inline-flex' }}>
                                            <InputNumber min={0}
                                                style={{ paddingLeft: '12px', color: '#7ED3B2' }}
                                                onChange={(e) => { num1(e); }}
                                                value={amount1}
                                                placeholder='จำนวน'
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]}>
                                    <Col span={12} push={2}>
                                        <Select style={{ display: 'inline-block', width: '100%', color: '#7ED3B2' }}
                                            options={header}
                                            onChange={(e) => input2(e)}
                                            placeholder='รายการ'
                                        />
                                    </Col>
                                    <Col push={2}>
                                        <Form.Item name={list2} style={{ display: 'inline-flex' }}>
                                            <InputNumber min={0}
                                                style={{ paddingLeft: '12px', color: '#7ED3B2' }}
                                                onChange={(e) => { num2(e); }}
                                                value={amount2}
                                                placeholder='จำนวน'
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]}>
                                    <Col span={12} push={2}>
                                        <Select style={{ display: 'inline-block', width: '100%', color: '#7ED3B2' }}
                                            options={header}
                                            placeholder='รายการ'
                                            onChange={(e) => input3(e)}
                                        />
                                    </Col>
                                    <Col push={2}>
                                        <Form.Item name={list3} style={{ display: 'inline-flex' }}>
                                            <InputNumber min={0}
                                                style={{ paddingLeft: '12px', color: '#7ED3B2' }}
                                                onChange={(e) => num3(e)}
                                                value={amount3}
                                                placeholder='จำนวน'
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]}>
                                    <Col span={12} push={2}>
                                        <Select style={{ display: 'inline-block', width: '100%', color: '#7ED3B2' }}
                                            options={header}
                                            placeholder='รายการ'
                                            onChange={(e) => input4(e)}
                                        />
                                    </Col>
                                    <Col push={2}>
                                        <Form.Item name={list4} style={{ display: 'inline-flex' }}>
                                            <InputNumber min={0}
                                                style={{ paddingLeft: '12px', color: '#7ED3B2' }}
                                                onChange={(e) => num4(e)}
                                                value={amount4}
                                                placeholder='จำนวน'
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]}>
                                    <Col span={12} push={2}>
                                        <Select style={{ display: 'inline-block', width: '100%', color: '#7ED3B2' }}
                                            options={header}
                                            placeholder='รายการ'
                                            onChange={(e) => input5(e)}
                                        />
                                    </Col>
                                    <Col push={2}>
                                        <Form.Item name={list5} style={{ display: 'inline-flex' }}>
                                            <InputNumber min={0}
                                                style={{ paddingLeft: '12px', color: '#7ED3B2' }}
                                                onChange={(e) => num5(e)}
                                                value={amount5}
                                                placeholder='จำนวน'
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]}>
                                    <Col span={12} push={2}>
                                        <Form.Item name='other' style={{ display: 'inline-flex' }}>
                                            <Input
                                                style={{ borderColor: '#EF6C57', paddingLeft: '18px', border: 'none' }}
                                                onChange={(e) => input(e)}
                                                value={other}
                                                placeholder='อื่นๆ'
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col push={2}>
                                        <Form.Item name='amount' style={{ display: 'inline-flex' }}>
                                            <InputNumber min={0}
                                                style={{ paddingLeft: '12px', border: 'none' }}
                                                onChange={(e) => num(e)}
                                                value={amount}
                                                placeholder='จำนวน'
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <br />
                        <Button ghost htmlType="submit" type="primary" style={{ display: show }}> Save Record</Button>
                    </div>
                }
            </Form>
        </div >
    )
}
