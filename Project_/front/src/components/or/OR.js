import React from 'react';
import Foot from '../general/footer';
import Head from "../general/head";
import { Tabs, Col, List } from 'antd';
import logo from '../logo.svg';
import { Bar } from 'react-chartjs-2';
import axios from "../../config/axios";
import OrForm from './record';
import UpdateOR from './edit';

class OR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orList: [],
            lastOR: [],
            label: "",
            data: "",
        };
    }

    componentDidMount() {
        this.listOR()
    }

    async listOR() {
        const httpResponse = await axios.get("/orlist");
        this.setState({ orList: httpResponse.data })

        if (this.state.orList.length > 0) {
            const i = this.state.orList.length - 1
            this.setState({ lastOR: this.state.orList[i] })
            localStorage.setItem('allOr', JSON.stringify(this.state.orList))
        }
    }

    render() {
        const { TabPane } = Tabs;

        const ind = ['opcab', 'cabg', 'cabgvalve', 'valve', 'tevar', 'tavr', 'vats', 'pericardial', 'reOperation']
        localStorage.setItem('columnOR', JSON.stringify(ind))
        ind.push('other')

        const home = (
            <div style={{ alignSelf: 'center' }} >
                <img src={logo} className="App-logo" style={{ height: '2.5em' }} />
                OR
            </div>
        )

        const last = this.state.lastOR
        const data = Object.values(last).slice(4,-5)
        data.push(last.amount)

        const update = (last.length === 0 ?
            '-'
            :
            <div style={{ width: '90%' }}>
                <Bar data={
                    {
                        labels: ind,
                        datasets: [
                            {
                                label: last.date,
                                backgroundColor: '#7ED3B2',
                                data: data,
                            }
                        ]
                    }
                }
                />
            </div>)


        return (
            <div>
                <Head />

                <Tabs defaultActiveKey="0" type="card" >
                    <TabPane tab={home} key="0">
                        <div style={{ margin: '10px 40px' }}>
                            Last update:
                            {update}
                        </div>
                    </TabPane>
                    <TabPane tab="Add List" key="1">
                        <div style={{ margin: '23px' }}>
                            <Col span={12} offset={3}>
                                <p>OR List</p>
                                <hr></hr>
                                <List
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
}

export default OR;