import React, { useState } from "react";
import axios from "../../config/axios";
import 'antd/dist/antd.css';
import { Menu, Col, Alert, Button, Form, AutoComplete, InputNumber, Modal, Row, Divider } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import moment from "moment";
import Cardiac from "./cardiac";
import Special from "./special";
import Ep from "./Ep";
import Neuro from "./Neuro";
import Vascular from "./Vascular";
import UpdateCath from "./editCath";

const { confirm } = Modal;

export default function CathForm() {

    const fetchRecord = async () => {
        const httpRes = await axios.get("/cathlist");
        window.location.reload();
    };

    const Date = moment().format('D-MMM-YYYY');

    const [form] = Form.useForm();
    const [customer, inputCustomer] = useState();

    const [dateRec, dateR] = useState()
    const date = moment().subtract(1, 'd').format('D-MMM-YYYY')
    const option = [{ value: Date }, { value: date }]

    const onFinish = values => {
        const cardiac = localStorage.getItem('cardiac')
        const Cardiac = JSON.parse(cardiac)
        const ep = localStorage.getItem('ep')
        const Ep = JSON.parse(ep)
        const neuro = localStorage.getItem('neuro')
        const Neuro = JSON.parse(neuro)
        const vascular = localStorage.getItem('vascular')
        const Vascular = JSON.parse(vascular)
        const special = localStorage.getItem('special')
        const Special = JSON.parse(special)

        const valcardiac = localStorage.getItem('val_cardiac')
        const valep = localStorage.getItem('val_ep')
        const valneuro = localStorage.getItem('val_neuro')
        const valvascular = localStorage.getItem('val_vascular')
        const valspecial = localStorage.getItem('val_special')

        if (moment(dateRec)._isValid) {
            confirm({
                title: 'ยืนยันรายการบันทึก',
                icon: <ExclamationCircleOutlined />,
                content: values.date,
                color: 'red',
                onOk() {
                    axios.post("/cathlist", {
                        date: values.date,
                        customer: values.customer,
                        total: Cardiac + Ep + Vascular + Neuro + Special,
                        cardiac: Cardiac,
                        ep: Ep,
                        vascular: Vascular,
                        neuro: Neuro,
                        special: Special,
                        detailCardiac: valcardiac,
                        detailEp: valep,
                        detailVascular: valvascular,
                        detailNeuro: valneuro,
                        detailSpecial: valspecial,
                    });
                    console.log('ok');
                    fetchRecord();
                },
                onCancel() {
                    console.log('cancel');
                },
            });
        }
    };

    const list = localStorage.getItem('allCath')
    const cathL = JSON.parse(list)

    const [show, display] = useState('')
    const alert = (
        <Alert
            showIcon
            description="รายการของวันที่เลือกได้ถูกบันทึกแล้ว"
            type="error"
        />
    )

    const formC = (
        <div>
            <Form form={form} onFinish={onFinish} autoComplete="off">
                <Form.Item name='date'>

                    <AutoComplete placeholder='เลือกวันที่บันทึก'
                        options={option} style={{ width: '10em' }}
                        onChange={(e) => { dateR(e); }}
                        //Cannot rules = {[{ type: 'date' }]}
                        required
                    />
                </Form.Item>

                <div style={{ display: show }}>
                    <Row>
                        <Col span={12} offset={6}>

                            <Form.Item name="customer" label='ผู้เข้ารับบริการ (ราย)' style={{ paddingLeft: '30px' }}>
                                <InputNumber min={0}
                                    style={{
                                        width: '6em', textAlign: 'center', paddingLeft: '22px', color: 'cornflowerblue',
                                        borderTop: 'none', borderLeft: 'none', borderRight: 'none'
                                    }}
                                    value={customer}
                                    onChange={(e) => { inputCustomer(e); }}
                                    required
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col flex={2}>
                            <div style={{ backgroundColor: '#f9e5e5', borderRadius: '10px', padding: '3px 0', marginBottom: '15px' }}>
                                <Divider orientation="left" >
                                    Cardiac
                                </Divider>
                                <Cardiac />
                            </div>

                            <div style={{ backgroundColor: '#f2f2f2', borderRadius: '10px', padding: '3px 0', marginBottom: '15px' }}>
                                <Divider orientation="left" plain>
                                    Special Procedure (หัตถการรอง)
                                </Divider>
                                <Special />
                            </div>
                        </Col>

                        <Col>
                            <Divider type="vertical" style={{ height: 'auto' }} />
                        </Col>

                        <Col flex={3}>
                            <div style={{ backgroundColor: 'aliceblue', borderRadius: '10px', padding: '3px 0', marginBottom: '15px' }}>
                                <Divider orientation="left" >
                                    EP & Device
                                </Divider>
                                <Ep />
                            </div>

                            <div style={{ backgroundColor: 'palegoldenrod', borderRadius: '10px', padding: '3px 0', marginBottom: '15px' }}>

                                <Divider orientation="left" >
                                    Neuro
                                </Divider>
                                <Form>
                                    <Neuro />
                                </Form>
                            </div>

                            <div style={{ backgroundColor: 'lavender', borderRadius: '10px', padding: '3px 0', marginBottom: '15px' }}>
                                <Divider orientation="left" >
                                    Vascular
                                </Divider>
                                <Vascular />
                            </div>

                        </Col>
                    </Row>

                    <Button ghost htmlType="submit" type="primary" style={{ display: show }}> Save Record</Button>

                </div>
            </Form>
        </div>
    )

    const [content, setContent] = useState(formC)

    return (
        <div style={{ padding: '0 50px 15px' }} className="content">
            <Col offset={12}>
                <div style={{ width: '10em' }}>
                    <Menu mode="inline" defaultSelectedKeys='add' style={{ border: 'none' }}>
                        <Menu.Item key='edit' onClick={() => { setContent(<UpdateCath />) }}>
                            Edit
                        </Menu.Item>
                        <Menu.Item key='add' onClick={() => { setContent(formC) }}>
                            Add
                        </Menu.Item>
                    </Menu>
                </div>
            </Col>

            {content}

        </div>
    )
}