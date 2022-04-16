import React, { useEffect, useState } from 'react';
import Foot from '../general/footer';
import Head from "../general/head";
import { Tabs, Col, List } from 'antd';
import logo from '../logo.svg';
import { Bar } from 'react-chartjs-2';
import axios from "../../config/axios";
import moment from "moment";
import OrForm from './record';
import UpdateOR from './edit';

export default function OR() {

    const { TabPane } = Tabs;

    const ind = ['opcab', 'cabg', 'cabgvalve', 'valve', 'tevar', 'tavr', 'vats', 'pericardial', 'reOperation']
    localStorage.setItem('columnOR', JSON.stringify(ind))

    const home = (
        <div style={{ alignSelf: 'center' }} >
            <img src={logo} className="App-logo" style={{ height: '2.5em' }} />
            OR
        </div>
    )

    const [orList, setOrList] = useState([]);
    const fetchList = async () => {
        const httpResponse = await axios.get("/orlist");
        setOrList(httpResponse.data);
    };

    useEffect(() => {
        fetchList()
        axios.get("/orlist").then((res) => {
            localStorage.setItem('allOr', JSON.stringify(res.data))
        })

        const listOR = localStorage.getItem('allOr')
        const or = JSON.parse(listOR) || '[]'
        // const colOR = or.map((rank, i, row) => {
        //     const x = Object.keys(rank)
        //     return localStorage.setItem('columnOR', JSON.stringify(x));
        // })
        if (or.length > 0 && or !== '[]') {
            const data = or.map((rank, i, row) => {
                // console.log(rank.record.date == yesterday)
                localStorage.setItem('lastOR', JSON.stringify(Object.values(rank)))
                // if (rank.record.date == today) {
                //     return localStorage.setItem('dataOR', JSON.stringify(Object.values(rank.record)))
                //     // } else {
                //     //     return localStorage.setItem('dataOR', JSON.stringify([]))
                // } else if (rank.record.date == yesterday) {
                //     return localStorage.setItem('dataOr', JSON.stringify(Object.values(rank.record)))
                // }
            })
            // } else {
            //     return localStorage.setItem('dataOR', JSON.stringify([]))
        }
    })
    // const label = localStorage.getItem('columnOR')
    const yOR = localStorage.getItem('dataOR') || '[]'
    const y = localStorage.getItem('data') || '[]'
    const last = localStorage.getItem('lastOR') || '[]'
    const lasts = JSON.parse(last)

    const update = (last == '[]' ?
        '-'
        :
        <div style={{ width: '90%' }}>
            <Bar data={
                {
                    labels: ind,
                    datasets: [
                        {
                            label: ((JSON.parse(last)).at(1)),
                            backgroundColor: '#7ED3B2',
                            data: (JSON.parse(last)).slice(4,-4),
                        }
                    ]
                }
            }
            />
        </div>)

    return (
        <div>
            <Head />
            <div className='content'>
                
            </div>
            <Tabs defaultActiveKey="0" type="card" >
                <TabPane tab={home} key="0">
                    <div style={{ margin: '10px 40px' }}>
                        Last update:
                        {update}
                    </div>
                    {/* <Carousel autoplay>
                        <div className="site-layout-content">
                            {showToday}
                        </div>
                        <div>
                            {showYesterday}
                        </div>
                    </Carousel> */}
                </TabPane>
                <TabPane tab="Add List" key="1">
                    <div style={{ margin: '23px' }}>
                            <Col span={12} offset={3}>
                                <p>OR List</p>
                                <hr></hr>
                                <List // bordered
                                    dataSource={ind}
                                    renderItem={item => (
                                        <li>{item}</li>
                                    )}
                                />
                            </Col>
                    </div>
                </TabPane>
                <TabPane tab="Add Record" key="2">
                    <div style={{ margin: '2em' }}>
                        <OrForm />
                    </div>
                </TabPane>
                <TabPane tab="Edit Record" key="3">
                    <div style={{ margin: '2em 3em' }}>
                        <UpdateOR />
                    </div>
                </TabPane>
            </Tabs>

            <Foot />
        </div >
    )
}
