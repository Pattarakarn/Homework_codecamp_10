import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import 'antd/dist/antd.css';
import { Row, Col, Alert, Button, Form, Modal, InputNumber, Input, Select } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import moment from "moment";

const { confirm } = Modal;

export default function OpdForm() {

    const [all, setAll] = useState([], () => {
        const storage = localStorage.getItem('all')
        console.log(storage)
    });
    const [record, setRecord] = useState([], () => {
        const storage = JSON.parse(localStorage.getItem('record'))
        console.log(storage)
    });
    useEffect(() => {
        localStorage.setItem('record', JSON.stringify(record))
    }, [record]);

    const fetchRecord = async () => {
        const httpRes = await axios.get("/opdlist");
        setAll(httpRes.data);
        window.location.reload();
    };

    const Date = moment().format('D-MMM-YYYY');
    const [form] = Form.useForm();
    const [customer, inputCustomer] = useState("");

    const [dateRec, dateR] = useState()

    const onFinish = values => {
        const total = values.admit + values.visit + values.tele + values.amount
        const obj = {}
        obj['total'] = total
        const value = Object.assign(values, obj)

        if (dateRec == Date) {
            confirm({
                title: 'ยืนยันรายการบันทึกของวันนี้',
                icon: <ExclamationCircleOutlined />,
                content: (Date),
                onOk() {
                    // "StudentId":nextSequence("SID")
                    // axios.post("/opdlist", ({"_id": getNextSequence("item_id"), values }));
                    axios.post("/opdlist", value);
                    fetchRecord();
                    console.log('บันทึก');
                },
                onCancel() {
                    console.log('ยกเลิก');
                },
            });
        } else if (dateRec == date) {
            confirm({
                title: 'ยืนยันรายการบันทึกของเมื่อวาน', content: (date),
                onOk() {
                    axios.post("/opdlist", value);
                    fetchRecord();
                },
            });
        }
    };

    const list = localStorage.getItem('allOpd')
    const opdL = JSON.parse(list) || []

    const date = moment().subtract(1, 'd').format('D-MMM-YYYY')
    const Opt = opdL.map((rank, i) => {
        if (i + 1 !== 0) {
            return (rank.date)
        }
    })

    const option = [{ value: Date }, { value: date }]
    const [show, display] = useState('')

    const alert = (
        <Alert
            description="รายการของวันที่เลือกได้ถูกบันทึกแล้ว"
            type="error"
        />
    )

    const showInputNum = () => {
        width('168px')
        change('')
        setPrefix('')
    }
    const [prefixOther, setPrefix] = useState('Other');
    const [changeWidth, width] = useState('220px');
    const [visible, change] = useState('none');

    return (
        <div className="site-layout-content">
            <Form form={form} onFinish={onFinish} autoComplete="off" >
                <Form.Item name='date'>
                    <Select placeholder='เลือกวันที่บันทึก'
                        options={option}
                        style={{ width: '10em' }}
                        onChange={(e) => { dateR(e); }}
                    />
                </Form.Item>

                {Opt.includes(dateRec) ?
                    alert
                    :
                    <div style={{ display: show }}>
                        <Row>
                            <Col span={9} offset={7}>
                                <Form.Item name="customer" label='ผู้เข้ารับบริการ (ราย)' style={{ paddingLeft: '30px' }}>
                                    <InputNumber min={0}
                                        style={{
                                            width: '6em', textAlign: 'center', paddingLeft: '22px',
                                            color: 'deeppink', borderTop: 'none', borderLeft: 'none', borderRight: 'none'
                                        }}
                                        value={customer}
                                        onChange={(e) => { inputCustomer(e); }}
                                        required
                                    />
                                </Form.Item>
                            </Col>
                        </Row>


                        <Col span={12} offset={6}>
                            <Row>
                                <Select open='' style={{ width: '100px', cursor: 'unset' }} value='Visit' >
                                </Select>
                                {/* <InputNumber  addonBefore={prefixSelector} defaultValue="0" min="0"
                                    style={{width:'20em'}}/> */}
                                <Form.Item name='visit'>
                                    <InputNumber min='0' style={{ width: 'auto' }} />
                                </Form.Item>
                            </Row>
                            <Row>
                                <Select open='' style={{ width: '100px', cursor: 'unset' }} value='Tele-med'>
                                </Select>
                                <Form.Item name='tele'>
                                    <InputNumber min='0' style={{ width: 'auto' }} />
                                </Form.Item>
                            </Row>
                            <Row>
                                <Select open='' style={{ width: '100px', cursor: 'unset' }} value='Admit'>
                                </Select>
                                <Form.Item name='admit' >
                                    <InputNumber min='0' style={{ width: 'auto' }} />
                                </Form.Item>
                            </Row>
                            <Row>
                                <Form.Item name='other'>
                                    <Input addonBefore={prefixOther} onChange={showInputNum}
                                        placeholder=' . . . . . '
                                        style={{ borderColor: 'pink' }} />
                                </Form.Item>
                                <Form.Item name='amount'>
                                    <InputNumber min={0}
                                        style={{ paddingLeft: '12px', color: 'deeppink', display: visible }}
                                        placeholder='amount'
                                    />
                                </Form.Item>
                            </Row>

                            <br />
                            <Form.Item>
                                <Button htmlType="submit"
                                    style={{ display: show, backgroundColor: 'pink', borderColor: 'deep' }}>
                                    Save Record
                                </Button>
                            </Form.Item>
                        </Col>
                    </div>
                }
            </Form>
        </div >
    )
}
