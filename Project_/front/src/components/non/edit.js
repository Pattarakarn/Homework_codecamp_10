import React, { useState } from "react";
import axios from "../../config/axios";
import { Descriptions, Steps, Select, Card, Input, Button, Row, Divider, InputNumber, Form, message } from 'antd';
import { CalendarOutlined, EditOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Step } = Steps;

export default function UpdateNon() {
    const list = localStorage.getItem('allNon')
    const nonL = JSON.parse(list)

    const sortNonL = nonL.sort(function(a, b){return new Date(a.date)- new Date(b.date)});
    console.log(sortNonL)
    const Opt = sortNonL.map((rank, i, row) => {
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

        const Edit = nonL.map((rank) => {
            console.log(rank)
            if (rank.date == value.value) {
                localStorage.setItem('key', JSON.stringify(rank.id));
                localStorage.setItem('data', JSON.stringify(rank));
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
            ekg: record.ekg,
            abi: record.abi,
            holter: record.holter,
            event: record.event,
            abp: record.abp,
            echo: record.echo,
            echo3D: record.echo3D,
            tee: record.tee,
            est: record.est,
            stress: record.stress,
            dobu: record.dobu,
            tilt: record.tilt,
            bicycle: record.bicycle,
            other: record.other,
            amount: record.amount,
            recorder: record.recorder,
            updatedAt: record.updatedAt,
        });
    };

    const onFinish = values => {
        message.info('กำลังอัพเดทข้อมูล')
        const id = localStorage.getItem('key')
        axios.put(`/nonlist/${id}`, values);
        window.location.reload()
    }

    const [display, displayB] = useState('none')
    const [color, colorO] = useState('')
    const [step, setStep] = useState('1')

    const head = (
        <div>
            <Select
                labelInValue
                style={{ width: 150, color: color }}
                onSelect={onFill}
                defaultValue='เลือกวันที่'
            >
                {Opt.reverse()}
            </Select>
        </div>
    )

    const [head2, change2] = useState('แก้ไขรายการเดิมของ Non-invasive')
    const change = () => {
        change2('')
        colorO('#EF6C57')
    }

    const [bRadius, borderR] = useState('')
    const [padding, padd] = useState('0.5em')
    const oChange = () => {
        padd('')
    }

    const edit = (
        <div style={{ display: display }}>
            <Form form={form} onFinish={onFinish} layout="horizontal">
                <Form.Item name='recorder' label='Recorder'>
                    <Input disabled style={{ width: 'auto', border: 'none' }} />
                </Form.Item>

                <Row>
                    <Card title="ผู้รับบริการ" >
                        <Form.Item name='customer'>
                            <InputNumber onChange={change} min={0} style={{ paddingLeft: '22px', color: color }} />
                        </Form.Item>
                    </Card>
                    <Card title="จำนวนหัตถการ" style={{ width: '150px' }}>
                        <Form.Item name='total'>
                            <Input disabled style={{ paddingLeft: '22px' }} />
                        </Form.Item>
                    </Card>
                </Row>
                <Divider dashed style={{ color: 'orange' }} />
                <Row>
                    <Descriptions size="small" column={5}>
                        <Descriptions.Item>
                            <Form.Item name='ekg' label="EKG">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Descriptions.Item>
                        <Descriptions.Item>
                            <Form.Item name='abi' label="ABI">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Descriptions.Item>
                        <Descriptions.Item>
                            <Form.Item name="holter" label="Holter">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Descriptions.Item>
                        <Descriptions.Item>
                            <Form.Item name="event" label="Event">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Descriptions.Item>
                        <Descriptions.Item>
                            <Form.Item name="abp" label="ABP">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Descriptions.Item>
                    </Descriptions>
                </Row>

                <Row>
                    {/* <Col span={14}> */}
                    <Descriptions size="small" column={5}>
                        <Descriptions.Item>
                            <Form.Item name="echo" label="Echo">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Descriptions.Item>
                        <Descriptions.Item>
                            <Form.Item name="echo3D" label="Echo3D">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Descriptions.Item>
                        <Descriptions.Item>
                            <Form.Item name="tee" label="TEE">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Descriptions.Item>
                    </Descriptions>
                    {/* </Col> */}
                </Row>

                <Descriptions size="small" column={5}>
                    <Descriptions.Item>
                        <Form.Item name="est" label="EST">
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                        </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item span={2}>
                        <Form.Item name="stress" label="Exercise Stress Echo">
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                        </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item>
                        <Form.Item name="dobu" label="Dobutamine Stress Echo">
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                        </Form.Item>
                    </Descriptions.Item>
                </Descriptions>

                <Descriptions size="small" column={5}>
                    <Descriptions.Item span={2}>
                        <Form.Item name="bicycle" label="Bicycle stress">

                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                        </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item>
                        <Form.Item name="tilt" label="Tilt table test">
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                        </Form.Item>
                    </Descriptions.Item>
                </Descriptions>

                <Descriptions size="small" column={5}>
                    <Descriptions.Item span={2}>
                        <Form.Item name="other" label="Other">
                            <Input onChange={() => { change(); oChange(); }} min={0}
                                style={{
                                    width: '100%',
                                    borderRadius: bRadius, paddingLeft: padding, color: color,
                                    borderLeft: 'none', borderRight: 'none', borderTop: 'none'
                                }} />
                        </Form.Item>
                    </Descriptions.Item>
                    <Descriptions.Item>
                        <Form.Item name="amount" label="Amount">
                            <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '3.5em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                        </Form.Item>
                    </Descriptions.Item>
                </Descriptions>

                <Button htmlType="submit" onFinish={onFinish}
                    style={{ backgroundColor: '#EF6C57', color: 'white', borderRadius: '7px', display: display }} >
                    ยืนยันการแก้ไข
                </Button>

            </Form>
        </div >
    )


    return (
        <div>

            <div className="site-layout-content" style={{ width: '80%', margin: 'px' }}>
                <Steps current={step} direction='vertical'>
                    <Step title={head} icon={<CalendarOutlined />} />
                    <Step title={head2} description={edit} icon={<EditOutlined />} />
                </Steps>
            </div>

        </div >
    );
}