import React, { useEffect } from 'react';
import Foot from '../general/footer';
import Head from "../general/head";
import { Button, Tabs } from 'antd';
import logo from '../logo.svg';
import { Bar, Pie } from 'react-chartjs-2';
import axios from "../../config/axios";
import OpdForm from './record';
import UpdateOPD from './edit';
import { SyncOutlined } from '@ant-design/icons';

export default function OPD() {

    const { TabPane } = Tabs;

    const home = (
        <div style={{ alignSelf: 'center' }} >
            <img src={logo} className="App-logo" style={{ height: '2.5em' }} />
            OPD
        </div>
    )

    useEffect(() => {
        axios.get("/opdlist").then((res) => {
            if (res.status == '200') {
                localStorage.setItem('allOpd', JSON.stringify(res.data))

                const listOPD = localStorage.getItem('allOpd')
                const opd = JSON.parse(listOPD) || '[]'

                const data = opd.map((rank, i, row) => {
                    if (row.length - 1 == i) {
                        const arr = Object.values(rank).slice(0, -5)
                        arr.push(rank.amount)
                        return localStorage.setItem('last', JSON.stringify(arr))
                    }
                })
            } else {
                localStorage.setItem('allOpd', [])
            }
        })
    })

    const label = ['Visit', 'Tele-med', 'Admit', 'Other']
    const last = localStorage.getItem('last') || '[]'

    const update = (last == '[]' ?
        ' -'
        :
        <div style={{ width: '90%' }}>
            <Bar data={
                // <Pie data={
                {
                    labels: label,
                    datasets: [
                        {
                            label: ((JSON.parse(last)).at(1)),
                            backgroundColor: 'pink',
                            data: (JSON.parse(last)).slice(4),
                        }
                    ]
                }
            } />
        </div>)

    return (
        <div>
            <Head />

            <Tabs type="card" >
                <TabPane tab={home} key="1">
                    <div style={{ margin: '10px 40px' }}>
                        Last update:
                        <Button style={{ border: 'none' }}><SyncOutlined /></Button>
                        {update}
                    </div>
                </TabPane>

                <TabPane tab="Add Record" key="2">
                    <div style={{ margin: '2em' }}>
                        <OpdForm />
                    </div>
                </TabPane>
                <TabPane tab="Edit Record" key="3">
                    <div style={{ margin: '2em 3em' }}>
                        <UpdateOPD />
                    </div>
                </TabPane>
            </Tabs>

            <Foot />
        </div>
    )
}
