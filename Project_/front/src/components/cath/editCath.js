import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import { Steps, Layout, Select, Card, Input, Button, Row, Col, Divider, InputNumber, Form, message } from 'antd';
import { CalendarOutlined, EditOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Content } = Layout;
const { Step } = Steps;

export default function UpdateCath() {
    //     const [cathList, setCathList] = useState([]);
    //     const fetchList = async () => {
    //     };
    //     useEffect(() => {
    //         const httpResponse = axios.get("/cathlist");
    //         setCathList(httpResponse.data);
    //     })
    // console.log(cathList)

    const list = localStorage.getItem('allCath')
    const cathL = JSON.parse(list)

    const sortCathL = (cathL.sort((a, b) => new Date(b.date) - new Date(a.date)))
    const Opt = sortCathL.map((rank, i, row) => {
        const children = [];
        for (let i = 0; i < row.length; i++) {
            children.push(<Option key={rank.id} value={rank.date}> {rank.date} </Option>);
            return (children)
        }
    })

    const [form] = Form.useForm();
    const [record, setData] = useState()

    const onFill = (value) => {
        setStep('2')
        displayB('')
        const Edit = cathL.map((rank) => {
            if (rank.date == value.value) {
                setData(rank)
                localStorage.setItem('data', JSON.stringify(rank));
            } else {
                return ''
            }
        })
        const Data = localStorage.getItem('data')
        const record = JSON.parse(Data)

        const detailCardiac = JSON.parse(record.detailCardiac)
        const detailEp = JSON.parse(record.detailEp)
        const detailVascular = JSON.parse(record.detailVascular)
        const detailNeuro = JSON.parse(record.detailNeuro)
        const detailSpecial = JSON.parse(record.detailSpecial)

        form.setFieldsValue({
            customer: record.customer,
            total: record.total,
            recorder: record.recorder,

            cardiac: record.cardiac,
            ep: record.ep,
            neuro: record.neuro,
            vascular: record.vascular,
            special: record.special,

            cag: detailCardiac.cag,
            pci: detailCardiac.pci,
            cagpci: detailCardiac.cagpci,
            leftrightHC: detailCardiac.leftrightHC,
            asd: detailCardiac.asd,
            vsd: detailCardiac.vsd,
            tavr: detailCardiac.tavr,
            iabp: detailCardiac.iabp,
            cpr: detailCardiac.cpr,

            eps: detailEp.eps,
            epsablation: detailEp.epsablation,
            epsablation3D: detailEp.epsablation3D,
            pacemaker: detailEp.pacemaker,
            aicd: detailEp.aicd,
            crtd: detailEp.crtd,
            crt: detailEp.crt,

            embolization: detailNeuro.embolization,
            coil: detailNeuro.coil,
            pta: detailVascular.pta,
            ptastent: detailVascular.ptastent,

            ivus: detailSpecial.ivus,
            oct: detailSpecial.oct,
            ffrifr: detailSpecial.ffrifr,
            rotablator: detailSpecial.rotablator,
            cardioversion: detailSpecial.cardioversion,
            pericardiocentasis: detailSpecial.pericardiocentasis,
            updatedAt: record.updatedAt
        });
    };

    const onFinish = values => {
        console.log(values)
        message.info('กำลังอัพเดทข้อมูล')
        const id = record.id
        console.log(id)
        axios.put(`/cathlist/${id}`, values);
        // window.location.reload()
    }

    const [display, displayB] = useState('none')
    const [color, colorO] = useState('')
    const [step, setStep] = useState('1')

    const head = (
        <div >
            <Select
                labelInValue
                style={{ width: 150, color: color }}
                onSelect={onFill}
                defaultValue='เลือกวันที่'
            >
                {Opt}
            </Select>
        </div>
    )

    const [head2, change2] = useState('แก้ไขรายการเดิมของ Cath-Lab')
    const change = () => {
        change2('')
        colorO('cornflowerblue')
    }

    const [bRadius, borderR] = useState('')
    const [padding, padd] = useState('0.5em')
    const oChange = () => {
        padd('')
    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const edit = (
        <div style={{ display: display }}>

            <Form form={form} onFinish={onFinish}>
                <Form.Item name='recorder' label='Recorder'>
                    <Input disabled style={{ width: 'auto', border: 'none' }} />
                </Form.Item>
                <Form.Item name='updatedAt'>
                    <Input disabled
                        style={{ backgroundColor: 'rgba(0,0,0,0)', border: 'none', width: '15em' }}
                    />
                </Form.Item>
                {/* <SyncOutlined onClick={fetchList} /> */}
                <table>
                    <td>
                        <Card title="ผู้รับบริการ" >
                            <Form.Item name='customer'>
                                <InputNumber onChange={change} min={0} style={{ paddingLeft: '22px', color: color }} />
                            </Form.Item>
                        </Card>
                    </td>
                    <td>
                        <Card title="จำนวนหัตถการ" style={{ width: '150px' }}>
                            <Form.Item name='total'>
                                <Input disabled style={{ paddingLeft: '22px' }} />
                            </Form.Item>
                        </Card>
                    </td>
                </table>
                <Divider dashed />
                <div style={{ border: '1px' }}>
                    <Form.Item name='cardiac' >
                        <Input prefix='Cardiac:' disabled style={{ color: 'darkblue', border: 'none', width: '120px' }} />
                    </Form.Item>
                    <Row gutter={[16, 16]}>
                        <Col>
                            <Form.Item name="cag" label="CAG">
                                <InputNumber name="cag" onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="pci" label="PCI">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="cagpci" label="CAG+PCI">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col>
                            <Form.Item name="aortogram" label="Aortogram">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="leftrightHC" label="Left/Right Heart Cath">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col>
                            <Form.Item name="asd" label="ASD">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="vsd" label="VSD">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="tavr" label="TAVR">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Form.Item name='ep'>
                            <Input prefix='EP&Device:' disabled style={{ color: 'darkblue', border: 'none', width: '120px' }} />
                        </Form.Item>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col>
                            <Form.Item name="eps" label="EPs" labelCol={{ span: 7 }}
                                wrapperCol={{ span: 14 }}>
                                <InputNumber name="cag" onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="epsablation" label="EPs+Ablation">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="epsablation3D" label="EPs+Ablation+3D">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={[16, 16]}>
                        <Col>
                            <Form.Item name="pacemaker" label="Pacemaker">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="aicd" label="AICD">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="crt" label="CRT">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="crtd" label="CRT-D">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item name="neuro">
                        <Input prefix='Neuro:' disabled style={{ color: 'darkblue', border: 'none', width: '120px' }} />
                    </Form.Item>
                    <Row gutter={[16, 16]}>
                        <Col>
                            <Form.Item name="embolization" label="Embolization">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="coil" label="Coil">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item name="vascular">
                        <Input prefix='Vascular:' disabled style={{ color: 'darkblue', border: 'none', width: '120px' }} />
                    </Form.Item>
                    <Row gutter={[16, 16]}>
                        <Col>
                            <Form.Item name="pta" label="PTA">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="ptastent" label="PTA+Stent">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item name="special">
                        <Input prefix='Special:' disabled style={{ color: 'darkblue', border: 'none', width: '120px' }} />
                    </Form.Item>
                    <Row gutter={[16, 16]}>
                        <Col>
                            <Form.Item name="ivus" label="IVUS">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="oct" label="OCT">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="ffrifr" label="FFR/iFR">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="rotablator" label="Rotablator">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>

                        <Col>
                            <Form.Item name="cardioversion" label="Cardioversion">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="pericardiocentasis" label="Pericardiocentasis">
                                <InputNumber onChange={() => { change(); oChange(); }} min={0} style={{ width: '4em', borderRadius: bRadius, paddingLeft: padding, color: color }} />
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
                <Button htmlType="submit" onFinish={onFinish}
                    style={{ backgroundColor: 'cornflowerblue', color: 'white', borderRadius: '7px', display: display }} >
                    ยืนยันการแก้ไข
                </Button>
            </Form >
        </div >
    )

    return (
        <div>
            <Content>
                <Steps current={step} direction='vertical'>
                    <Step title={head} icon={<CalendarOutlined />} />
                    <Step title={head2} description={edit} icon={<EditOutlined />} />
                </Steps>
            </Content>
        </div>
    );
}