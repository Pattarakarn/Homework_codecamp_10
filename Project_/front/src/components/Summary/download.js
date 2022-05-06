import React, { useState } from "react";
import { Button, DatePicker, Breadcrumb, Divider, Row, Col, Card, Dropdown, Menu } from 'antd';
import { CSVLink } from 'react-csv';
import { DownloadOutlined } from '@ant-design/icons';
import Head from "../general/head";
import Foot from "../general/footer";

const { RangePicker } = DatePicker;

export default function Download() {

    const allNon = localStorage.getItem('allNon')
    const non = JSON.parse(allNon)

    const allOR = localStorage.getItem('allOR')
    const or = JSON.parse(allOR)

    const allCath = localStorage.getItem('allCath')
    const cath = JSON.parse(allCath)

    const allOPD = localStorage.getItem('allOPD')
    const opd = JSON.parse(allOPD)

    function onChange(date, dateString) {
        const from = new Date(dateString[0])
        const to = new Date(dateString[1])
        const dataOPD = opd.filter(opd => {
            let date = new Date(opd.date);
            return date >= from && date <= to;
        })
        const dataN = non.filter(non => {
            let date = new Date(non.date);
            return date >= from && date <= to;
        })
        const dataC = cath.filter(cath => {
            let date = new Date(cath.date);
            return date >= from && date <= to;
        })
        const dataOR = or.filter(or => {
            let date = new Date(or.date);
            return date >= from && date <= to;
        })

        if (dateString[1] !== '') {
            setText('.. Download ..')
            if (dataOPD.length !== 0) {
                setopdLoad(<CSVLink data={dataOPD} filename='Report_OPD.csv'> OPD </CSVLink>)
            }
            if (dataN.length !== 0) {
                setnonLoad(<CSVLink data={dataN} filename='Report_Non.csv'> Non-invasive </CSVLink>)
            }
            if (dataC.length !== 0) {
                setcathLoad(<CSVLink data={dataC} filename='Report_Cath.csv'> Cath-Lab </CSVLink>)
            }
            if (dataOR.length !== 0) {
                setorLoad(<CSVLink data={dataOR} filename='Report_OR.csv'> OR Hybrid </CSVLink>)
            }
        } else {
            setopdLoad()
            setnonLoad()
            setcathLoad()
            setorLoad()
        }
    }

    const picker = (
        <RangePicker onChange={onChange} format='D-MMM-YYYY' />
    )

    const [text, setText] = useState('Choose Range')

    const [opdLoad, setopdLoad] = useState('')
    const [orLoad, setorLoad] = useState('')
    const [nonLoad, setnonLoad] = useState('')
    const [cathLoad, setcathLoad] = useState('')

    const menus = (
        <div style={{ display: 'inline-flex', alignSelf: 'center'}}>
            <Button type="default" style={{ border: 'none' }}>
                <a rel="" href="/">
                    View
                </a>
            </Button>
            <Button type="default" style={{ border: 'none' }}>
                <a rel="" href="/admin">
                    Manage
                </a>
            </Button>
            <Button type="text">
                Download
            </Button>
        </div>
    )

    const menuIcon = (
        <Button type="text" shape="circle" size='large'
                style={{ backgroundColor: 'purple', color: 'white', cursor: 'default' }}
                icon={<DownloadOutlined />} ></Button>
    )

    const [menu, setMenu] = useState(menuIcon)

    return (
        <div >
            <Head />
            {/* <Breadcrumb>
                <Breadcrumb.Item>
                    <Button type="default" shape="circle" size='large'
                    style={{backgroundColor: 'purple', color: 'white', cursor: 'default'}}
                        icon={<DownloadOutlined />} ></Button>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                <Button>
                    <a href="/summary">View</a>
                </Button>
                </Breadcrumb.Item >
            </Breadcrumb> */}
            <div style={{ height: '50px', paddingTop: '20px' }}
                onMouseOver={() => setMenu(menus)}
                onMouseLeave={() => setMenu(menuIcon)}>
                {menu}
            </div>
            {/* <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <Button type="text" shape="circle" size='large'
                        style={{ backgroundColor: 'purple', color: 'white', cursor: 'default' }}
                        icon={<DownloadOutlined />} ></Button>
                </a>
            </Dropdown> */}

            <Divider > {text} </Divider>

            <div style={{ height: '75vh' }}>
                <Col span={12} offset={6}>

                    {picker}

                    <div style={{
                        backgroundColor: '#ffd6e7', padding: '10px',
                        borderRadius: '20px', margin: '20px'
                    }}>
                        {opdLoad}
                    </div>
                    <div style={{
                        backgroundColor: 'rgba(255, 128, 0, 0.2)', padding: '10px',
                        borderRadius: '20px', margin: '20px'
                    }}>
                        {nonLoad}
                    </div>
                    <div style={{
                        backgroundColor: '#d6e4ff', padding: '10px',
                        borderRadius: '20px', margin: '20px'
                    }}>
                        {cathLoad}
                    </div>
                    <div style={{
                        backgroundColor: '#98DECF', padding: '10px',
                        borderRadius: '20px', margin: '20px'
                    }}>
                        {orLoad}
                    </div>

                </Col>
            </div>
            <Foot />
        </div >
    )
}