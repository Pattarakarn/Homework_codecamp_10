import React, { useState } from "react";
import axios from "../../config/axios";
import { Divider, Row, Col, Steps, Select, Card, Input, Button, InputNumber, Form, message } from 'antd';
import { CalendarOutlined, EditOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Step } = Steps;

export default function UpdateOR() {

    const list = localStorage.getItem('allOr')
    const orL = JSON.parse(list) || []
    const sortOrL = (orL.sort((a, b) => new Date(b.date) - new Date(a.date)))
    
    const Opt = sortOrL.map((rank, i, row) => {
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
        const Edit = orL.map((rank) => {
            if (rank.date == value.value) {
                return localStorage.setItem('data', JSON.stringify(rank));
            } else {
                return ''
            }
        })
        const Data = localStorage.getItem('data')
        const record = JSON.parse(Data)
        console.log(record)
        form.setFieldsValue({
            customer: record.customer,
            total: record.total,
            recorder: record.recorder,
            opcab: record.opcab,
            cabg: record.cabg,
            cabgvalve: record.cabgvalve,
            valve: record.valve,
            tevar: record.tevar,
            tavr: record.tavr,
            vats: record.vats,

            pericardial: record.pericardial,
            reOperation: record.reOperation,
            other: record.other,
            amount: record.amount,
        });
    };

    const onFinish = values => {
        console.log(values)
        message.info('กำลังอัพเดทข้อมูล')
        const id = localStorage.getItem('id')
        axios.put(`/orlist/${id}`, values);
        window.location.reload()
    }

    const [display, displayB] = useState('none')
    const [color, colorO] = useState('')
    const [step, setStep] = useState('1')

    const head = (
        <div >
            <Select
                labelInValue
                style={{ width: 150, borderColor: color }}
                onSelect={onFill}
                defaultValue='เลือกวันที่'
            >
                {Opt}
                {/* {Opt.sort((a, b) => b.props.value.date - a.props.value.date)} */}
            </Select>
        </div>
    )

    const [head2, change2] = useState('แก้ไขข้อมูลเดิม')
    const change = () => {
        change2('')
        colorO('#7ED3B2')
    }

    const [bRadius, borderR] = useState('')
    const [padding, padd] = useState('0.5em')
    const oChange = () => {
        padd('')
    }

    const [ruleNum, setNum] = useState(false)
    const [ruleOther, setOther] = useState(false)
    const otherInfo = e => { e.length ? setNum(true) : setNum(false) }
    const amountNum = e => { e ? setOther(true) : setOther(false) }

    const edit = (
        <div style={{ display: display }}>
            <Form form={form} onFinish={onFinish}>
                <Form.Item name='recorder' label='Recorder'>
                    <Input disabled style={{ width: '140px', border: 'none' }} />
                </Form.Item>
                <Row>
                    {/* <Col flex={3}> */}
                    <Card title="ผู้รับบริการ" >
                        <Form.Item name='customer'>
                            <InputNumber onChange={change} min={0} style={{ paddingLeft: '22px', borderColor: color }} />
                        </Form.Item>
                    </Card>
                    {/* </Col> */}
                    <Col flex={3}>
                        <Card title="จำนวนหัตถการ" style={{ width: '150px' }}>
                            <Form.Item name='total'>
                                <Input disabled style={{ paddingLeft: '22px' }} />
                            </Form.Item>
                        </Card>
                    </Col>
                </Row>
                {/* <div> */}
                <Divider dashed />

                <Row gutter={[16, 16]}>
                    <Col>
                        <Form.Item name="cabg" label="CABG">
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, borderColor: color }} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="cabgvalve" label="CABG+Valve">
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, borderColor: color }} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="valve" label="Valve">
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, borderColor: color }} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col>
                        <Form.Item name="opcab" label="OPCAB"
                        >
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, borderColor: color }} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="tevar" label="TEVAR"
                        >
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, borderColor: color }} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="tavr" label="TAVR"
                        >
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, borderColor: color }} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="vats" label="VATS"
                        >
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, borderColor: color }} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col>
                        <Form.Item name="pericardial" label="Pericardial">
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, borderColor: color }} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="reOperation" label="Re-operation">
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, borderColor: color }} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col>
                        <Form.Item name="other" label="Other" rules={[{ required: ruleOther, message: 'Please input' }]}>
                            <Input onChange={e => { change(); oChange(); otherInfo(e.target.value)}} min={0}
                                style={{
                                    width: '11em',
                                    borderRadius: bRadius, paddingLeft: padding, color: color,
                                    borderLeft: 'none', borderRight: 'none', borderTop: 'none'
                                }} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="amount" label='Amount' rules={[{ required: ruleNum, message: 'Please input' }]}>
                            <InputNumber onChange={e => { change(); oChange(); amountNum(e) }} min={0}
                                style={{
                                    width: '7em', borderRadius: bRadius, paddingLeft: padding, color: color
                                    , paddingLeft: '12px'
                                }} />
                        </Form.Item>
                    </Col>
                </Row>

                <Button htmlType="submit" onFinish={onFinish}
                    style={{ borderColor: '#7ED3B2', borderRadius: '7px', display: display }} >
                    ยืนยันการแก้ไข
                </Button>

            </Form>

        </div >
    )

    return (
        <div className="site-layout-content" style={{ width: '100%' }}>

            <Steps current={step} direction='vertical'>
                <Step title={head} icon={<CalendarOutlined />} />
                <Step title={head2} description={edit} icon={<EditOutlined />} />
            </Steps>
        </div>
    );
}