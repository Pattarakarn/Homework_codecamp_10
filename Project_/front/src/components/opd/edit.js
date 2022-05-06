import React, { useState } from "react";
import axios from "../../config/axios";
import { Row, Col, Steps, Select, Card, Input, Button, InputNumber, Form, message } from 'antd';
import { CalendarOutlined, EditOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Step } = Steps;

export default function UpdateOPD() {
    const list = localStorage.getItem('allOpd')
    const opdL = JSON.parse(list) || []

    const Opt = opdL.map((rank, i, row) => {
        const children = [];
        for (let i = 0; i < row.length; i++) {
            children.push(<Option key={rank.id} value={rank.date}> {rank.date} </Option>);
            return (children)
        }
    })

    const [form] = Form.useForm();
    const onFill = (value) => {
        setStep('2')
        displayB('')
        localStorage.setItem('id', value.key)
        const Edit = opdL.map((rank) => {
            if (rank.date == value.value) {
                return localStorage.setItem('data', JSON.stringify(rank));
            } else {
                return ''
            }
        })
        const Data = localStorage.getItem('data')
        const record = JSON.parse(Data)

        form.setFieldsValue({
            customer: record.customer,
            total: record.total,
            visit: record.visit,
            tele: record.tele,
            admit: record.admit,
            other: record.other,
            amount: record.amount,
            recorder: record.recorder,
        });
    };

    const onFinish = values => {
        const id = localStorage.getItem('id')
        axios.put(`/opdlist/${id}`, values);
        message.info('กำลังอัพเดทข้อมูล')
        // window.location.reload()
    }

    const [display, displayB] = useState('none')
    const [step, setStep] = useState('1')
    const [required, setRequired] = useState(false)
    const [rule, setRule] = useState(false)

    const otherInfo = e => { e.length ? setRequired(true) : setRequired(false) }
    const amountNum = e => { e ? setRule(true) : setRule(false) }

    const head = (
        <div >
            <Select
                labelInValue
                style={{ width: 150}}
                onSelect={onFill}
                defaultValue='เลือกวันที่'
            >
                {Opt.reverse()}
            </Select>
        </div>
    )

    const edit = (
        <div style={{ display: display }}>
            <Form form={form} onFinish={onFinish} >
                <Form.Item name='recorder' label='Recorder'>
                    <Input disabled style={{ width: '140px', border: 'none' }} />
                </Form.Item>
                <Row gutter={[10]}>
                    <Col>
                        <Card title="ผู้รับบริการ" style={{ borderRadius: '15px' }}>
                            <Form.Item name='customer'>
                                <InputNumber min={0} style={{ paddingLeft: '22px' }} />
                            </Form.Item>
                        </Card>
                    </Col>
                    <Col>
                        <Card title="จำนวนหัตถการ" style={{ width: '150px', borderRadius: '15px' }}>
                            <Form.Item name='total'>
                                <Input disabled style={{ paddingLeft: '22px' }} />
                            </Form.Item>
                        </Card>
                    </Col>
                </Row>
                <div style={{ padding: '20px' }}>
                    <Row>
                        <Form.Item name='visit'>
                            <InputNumber addonBefore='Visit'
                                style={{ width: '150px' }}
                                min={0}
                            />
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item name='tele'>
                            <InputNumber addonBefore='Tele-med'
                                style={{ width: '150px' }}
                                min={0}
                            />
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item name='admit' >
                            <InputNumber addonBefore='Admit'
                                style={{ width: '150px', borderColor: 'deeppink' }}
                                min={0}
                            />
                        </Form.Item>
                    </Row>

                    <Row gutter={[8]}>
                        <Col>
                            <Form.Item name='other' rules={[{ required: rule, message: 'Please input' }]}>
                                <Input name="Other" label='Other'
                                    placeholder='อื่นๆ :  เพิ่มเติม'
                                    style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                                    min={0}
                                    onChange={e => otherInfo(e.target.value)}
                                />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name='amount'>
                                <InputNumber min={0}
                                    placeholder='จำนวน'
                                    style={{ paddingLeft: '12px' }}
                                    required={required}
                                    onChange={e => amountNum(e)}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
                <Button htmlType="submit" onFinish={onFinish}
                    style={{ backgroundColor: 'pink', borderRadius: '7px', display: display }} >
                    ยืนยันการแก้ไข
                </Button>
            </Form>
        </div >
    )


    return (
        <div className="site-layout-content" style={{ width: '80%' }}>

            <Steps current={step} direction='vertical'>
                <Step title={head} icon={<CalendarOutlined />} />
                <Step title='แก้ไขข้อมูลเดิม' description={edit} icon={<EditOutlined />} />
            </Steps>
        </div>
    );
}