import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Col, Button, Form, InputNumber, Input, Collapse, Row } from 'antd';

const { Panel } = Collapse;

export default function NonForm() {

    useEffect(() => {
        const initialO = nOther || 0

        const sum = (parseInt(nEKG) + parseInt(nABI) + parseInt(nHolter) + parseInt(nEcho) + parseInt(nEST) + parseInt(nStress) + parseInt(nDobu) + parseInt(nEcho3D) + parseInt(nABP) + parseInt(nEvent) + parseInt(nBicycle) + parseInt(nTilt) + parseInt(nTee) + initialO)
        const val = {
            customer: customer,
            ekg: parseInt(nEKG),
            abi: parseInt(nABI),
            holter: parseInt(nHolter),
            event: parseInt(nEvent),
            abp: parseInt(nABP),
            echo: parseInt(nEcho),
            echo3D: parseInt(nEcho3D),
            tee: parseInt(nTee),
            est: parseInt(nEST),
            stress: parseInt(nStress),
            dobu: parseInt(nDobu),
            bicycle: parseInt(nBicycle),
            tilt: parseInt(nTilt),
            tilt: parseInt(nTilt),
            other: Other,
            amount: parseInt(nOther),
            total: sum
        }
        localStorage.setItem('val', JSON.stringify(val))
    })

    const [customer, inputCustomer] = useState("");
    const [nEKG, numEKG] = useState('0');
    const [nABI, numABI] = useState('0');
    const [nHolter, numHolter] = useState('0');
    const [nEcho, numEcho] = useState('0');
    const [nEST, numEST] = useState('0');

    const [nStress, numStress] = useState('0');
    const [nDobu, numDobu] = useState('0');
    const [nEcho3D, numEcho3D] = useState('0');
    const [nTee, numTee] = useState('0');
    const [nABP, numABP] = useState('0');
    const [nEvent, numEvent] = useState('0');
    const [nBicycle, numBicycle] = useState('0');
    const [nTilt, numTilt] = useState('0');
    const [Other, inputOther] = useState();
    const [nOther, numOther] = useState();

    return (
        <div style={{ flex: 'auto' }}>
            {/* <Col> */}
            <Form.Item name='customer'>
                ผู้เข้ารับบริการ  {``}
                <InputNumber min={0}
                    style={{
                        width: '6em', textAlign: 'center', paddingLeft: '22px',
                        borderColor: 'orange', borderTop: 'none', borderLeft: 'none', borderRight: 'none'
                    }}
                    value={customer}
                    onChange={(e) => { inputCustomer(e); }}
                    required
                />
                {`ราย`}
            </Form.Item>
            {/* </Col> */}

            <Form.Item>
                <Row align="center">
                    <Col md='8'>
                        <Input style={{ cursor: 'default' }}
                            value='EKG'
                        />
                    </Col>
                    <Col md='4'>
                        <InputNumber min={0}
                            placeholder="ระบุจำนวน"
                            value={nEKG}
                            onChange={(e) => numEKG(e)}
                            style={{ paddingLeft: '19px' }}
                        />
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <Row align="center">
                    <Col md='8'>
                        <Input style={{ cursor: 'default' }}
                            value='ABI'
                        />
                    </Col>
                    <Col md='4'>
                        <InputNumber min={0}
                            placeholder="ระบุจำนวน"
                            value={nABI}
                            onChange={(e) => numABI(e)}
                            style={{ paddingLeft: '19px' }}
                        />
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <Row align="center">
                    <Col md='8'>
                        <Input style={{ cursor: 'default' }}
                            value='Holter'
                        />
                    </Col>
                    <Col md='4'>
                        <InputNumber min={0}
                            placeholder="ระบุจำนวน"
                            value={nHolter}
                            onChange={(e) => numHolter(e)}
                            style={{ paddingLeft: '19px' }}
                        />
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <Row align="center">
                    <Col md='8'>
                        <Input style={{ cursor: 'default' }}
                            value='ABP'
                        />
                    </Col>
                    <Col md='4'>
                        <InputNumber min={0}
                            placeholder="ระบุจำนวน"
                            value={nABP}
                            onChange={(e) => numABP(e)}
                            style={{ paddingLeft: '19px' }}
                        />
                    </Col>
                </Row>
            </Form.Item>

            <div style={{ width: '70%', margin: "0 15%" }}>
                <Collapse ghost defaultActiveKey={['0']}>
                    <Panel key="0">
                        <div style={{
                            backgroundColor: 'rgba(255, 128, 0, 0.2)', padding: '30px 0', borderRadius: '15px'
                        }}>
                            <Form.Item>
                                <Row align="center">
                                    <Col md='8'>
                                        <Input style={{ cursor: 'default' }}
                                            value='Echo'
                                        />
                                    </Col>
                                    <Col md='4'>
                                        <InputNumber min={0}
                                            placeholder="ระบุจำนวน"
                                            value={nEcho}
                                            onChange={(e) => numEcho(e)}
                                            style={{ paddingLeft: '19px' }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row align="center">
                                    <Col md='8'>
                                        <Input style={{ cursor: 'default' }}
                                            value='Echo 3D/4D'
                                        />
                                    </Col>
                                    <Col md='4'>
                                        <InputNumber min={0}
                                            placeholder="ระบุจำนวน"
                                            value={nEcho3D}
                                            onChange={(e) => numEcho3D(e)}
                                            style={{ paddingLeft: '19px' }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row align="center">
                                    <Col md='8'>
                                        <Input style={{ cursor: 'default' }}
                                            value='EST'
                                        />
                                    </Col>
                                    <Col md='4'>
                                        <InputNumber min={0}
                                            placeholder="ระบุจำนวน"
                                            value={nEST}
                                            onChange={(e) => numEST(e)}
                                            style={{ paddingLeft: '19px' }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row align="center">
                                    <Col md='8'>
                                        <Input style={{ cursor: 'default' }}
                                            value='Stress'
                                        />
                                    </Col>
                                    <Col md='4'>
                                        <InputNumber min={0}
                                            placeholder="ระบุจำนวน"
                                            value={nStress}
                                            onChange={(e) => numStress(e)}
                                            style={{ paddingLeft: '19px' }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row align="center">
                                    <Col md='8'>
                                        <Input style={{ cursor: 'default' }}
                                            value='Dobu'
                                        />
                                    </Col>
                                    <Col md='4'>
                                        <InputNumber min={0}
                                            placeholder="ระบุจำนวน"
                                            value={nDobu}
                                            onChange={(e) => numDobu(e)}
                                            style={{ paddingLeft: '19px' }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Item>
                        </div>
                    </Panel>
                    <Panel header="รายการอื่นๆ" key="1">
                        <div style={{ backgroundColor: '#F2F2F2', padding: '30px 0', borderRadius: '15px' }}>
                            <Form.Item>
                                <Row align="center">
                                    <Col md='8'>
                                        <Input style={{ cursor: 'default' }}
                                            value='TEE'
                                        />
                                    </Col>
                                    <Col md='4'>
                                        <InputNumber min={0}
                                            placeholder="ระบุจำนวน"
                                            value={nTee}
                                            onChange={(e) => numTee(e)}
                                            style={{ paddingLeft: '19px' }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row align="center">
                                    <Col md='8'>
                                        <Input style={{ cursor: 'default' }}
                                            value='Event'
                                        />
                                    </Col>
                                    <Col md='4'>
                                        <InputNumber min={0}
                                            placeholder="ระบุจำนวน"
                                            value={nEvent}
                                            onChange={(e) => numEvent(e)}
                                            style={{ paddingLeft: '19px' }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row align="center">
                                    <Col md='8'>
                                        <Input style={{ cursor: 'default' }}
                                            value='Tilt'
                                        />
                                    </Col>
                                    <Col md='4'>
                                        <InputNumber min={0}
                                            placeholder="ระบุจำนวน"
                                            value={nTilt}
                                            onChange={(e) => numTilt(e)}
                                            style={{ paddingLeft: '19px' }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row align="center">
                                    <Col md='8'>
                                        <Input style={{ cursor: 'default' }}
                                            value='Bicycle'
                                        />
                                    </Col>
                                    <Col md='4'>
                                        <InputNumber min={0}
                                            placeholder="ระบุจำนวน"
                                            value={nBicycle}
                                            onChange={(e) => numBicycle(e)}
                                            style={{ paddingLeft: '19px' }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Row align="center">
                                <Col md='8'>
                                    <Input
                                        // style={{ width: 222 }}
                                        placeholder='อื่นๆ (ระบุ)'
                                        value={Other}
                                        onChange={(e) => inputOther(e.target.value)}
                                        required={Boolean(nOther)}
                                    />
                                </Col>
                                <Col md='4'>
                                    <InputNumber min={0}
                                        value={nOther}
                                        onChange={(e) => numOther(e)}
                                        style={{ paddingLeft: '19px' }}
                                        required={Boolean(Other)}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Panel>
                </Collapse>
            </div>

            <br />
            <Button htmlType="submit" type="primary">Save</Button>
        </div >
    )
}
