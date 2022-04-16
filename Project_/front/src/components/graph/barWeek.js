import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import axios from "../../config/axios";
import { Layout, Row, Statistic, Divider, Col, List, Button, notification, DatePicker } from 'antd';
import moment from "moment";
const { Content } = Layout;
const { RangePicker } = DatePicker;

export default function DataWeek() {
    const date = moment().format('D-MMM-YYYY');
    const yestd1 = moment().subtract(1, 'd').format('D-MMM-YYYY');
    const yestd2 = moment().subtract(2, 'd').format('D-MMM-YYYY');
    const yestd3 = moment().subtract(3, 'd').format('D-MMM-YYYY');
    const yestd4 = moment().subtract(4, 'd').format('D-MMM-YYYY');
    const yestd5 = moment().subtract(5, 'd').format('D-MMM-YYYY');
    const yestd6 = moment().subtract(6, 'd').format('D-MMM-YYYY');
    const yestd7 = moment().subtract(7, 'd').format('D-MMM-YYYY');

    const getDay = ((i) => {
        for (let i = 0; i <= 7; i++) {
            console.log(i)
        }
    })

    const allD = (localStorage.getItem('summary'))
    const allData = JSON.parse(allD)
    console.log(allData)

    // const t = allData.map((rank, i, row) => {
    //         // for (let i = 0; i < allData.length; i++) {
    //         //     console.log(allData.length)
    //         //     console.log(i)
    //         //   }
    //         if (rank.detail.includes(date)) {
    //             return console.log(date-1)
    //         } else {
    //             return ''
    //         }
    //     })

    const MD = moment().format('-MMM-YYYY');
    console.log(MD)
    function thirtyD() {
        for (let i = 1; i <= 31; i++) {
            console.log(i)  // 1-31
        }
    }

    console.log((parseInt(date) - '1') + MD)

    // function now() {
    //         state = {
    //             date: new Date()
    //         };
    //     }    กำหนด 31 แล้ว ลบ0-30

    // const dataX = () => {
    //     console.log(i)
    // }
    const [inputList, setInputList] = useState('');

    const [List, setList] = useState([], () => {
        const storage = localStorage.getItem('list')
        console.log(storage)
    });

    // const delData = () => {
    // const newList = [...List];
    // newList.pop(inputList);


    const list = allData.map((rank, i, row) => {
        if (rank.detail.includes(date)) {
            // return console.log(rank);
            return localStorage.setItem('td', JSON.stringify(rank));
        } else if (rank.detail.includes(yestd1)) {
            return localStorage.setItem('1ago', JSON.stringify(rank));
        } else if (rank.detail.includes(yestd2)) {
            return localStorage.setItem('2ago', JSON.stringify(rank));
        } else if (rank.detail.includes(yestd3)) {
            return localStorage.setItem('3ago', JSON.stringify(rank));
        } else if (rank.detail.includes(yestd4)) {
            return localStorage.setItem('4ago', JSON.stringify(rank));
        } else if (rank.detail.includes(yestd5)) {
            return localStorage.setItem('5ago', JSON.stringify(rank));
        } else if (rank.detail.includes(yestd6)) {
            return localStorage.setItem('6ago', JSON.stringify(rank));
        } else if (rank.detail.includes(yestd7)) {
            return localStorage.setItem('7ago', JSON.stringify(rank));
        } else {
            return ''
        }
    })

    // const totalC = JSON.parse(CATH)
    // const totalO = JSON.parse(OR)

    // // const data = {
    // //     labels: [date],
    //     // datasets: [
    //     //     // {
    //     //     //     label: totalC.user_code,
    //     //     //     data: [totalC.total],

    const today = (localStorage.getItem('td'))
    const pass1d = (localStorage.getItem('1ago'))
    const pass2d = (localStorage.getItem('2ago'))
    const pass3d = (localStorage.getItem('3ago'))
    const pass4d = (localStorage.getItem('4ago'))
    const pass5d = (localStorage.getItem('5ago'))
    const pass6d = (localStorage.getItem('6ago'))
    const pass7d = (localStorage.getItem('7ago'))
    const td = JSON.parse(today) || 0
    const p1d = JSON.parse(pass1d) || 0
    const p2d = JSON.parse(pass2d) || 0
    const p3d = JSON.parse(pass3d) || 0
    const p4d = JSON.parse(pass4d) || 0
    const p5d = JSON.parse(pass5d) || 0
    const p6d = JSON.parse(pass6d) || 0
    const p7d = JSON.parse(pass7d) || 0
    console.log(today)

    // const data = {
    //     labels: ['OPD', 'Non', 'Cath', 'OR'],
    //     datasets: [
    //         {
    //             type: 'line',
    //             label: 'ผู้เข้ารับบริการ',
    //             data: [totalOP.customer, totalN.customer, totalC.customer, totalO.customer],
    //         },
    //         {
    //             type: 'bar',
    //             label: 'จำนวนหัตถการทั้งหมด',
    //             data: [totalOP.total, totalN.total, totalC.total, totalO.total],
    //             backgroundColor: 'rgb(255, 99, 132)',
    //             borderColor: 'rgb(255, 99, 132)',
    //         },
    //     ]
    // };



    // function makeHalfAsOpaque(ctx) {
    //     return Utils.transparentize(getLineColor(ctx));
    // }

    const allTotal = [p7d.total, p6d.total, p5d.total, p4d.total, p3d.total, p2d.total, p1d.total]

    const allCustomer = [p7d.customer, p6d.customer, p5d.customer, p4d.customer, p3d.customer, p2d.customer, p1d.customer]

    const allDate = [yestd7, yestd6, yestd5, yestd4, yestd3, yestd2, yestd1, date]

    const data = {
        labels: allDate,
        datasets: [
            {
                type: 'line',
                label: 'ผู้เข้ารับบริการ',
                backgroundColor: 'rgb(153, 102, 255, 0.6)',
                data: allCustomer,
                fill: true,
                pointStyle: 'triangle',
                pointRadius: 7,
                cubicInterpolationMode: 'monotone',
            },
            {
                type: 'line',
                label: 'จำนวนหัตถการทั้งหมด',
                data: allTotal,
                backgroundColor: 'rgb(255, 205, 86, 0.6)',
                fill: true,
                pointRadius: 5,
                cubicInterpolationMode: 'monotone',

            },
            // {
            //     type: 'line',
            //     label: date,
            //     data: [td.total],
            //     stack: 'Stack 8'
            // },
        ]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'รายการบันทึก 7 วันที่ผ่านมา'
            }
        },
        element: {
            point: {
                // hoverBackgroundColor: makeHalfAsOpaque,
                // radius: adjustRadiusBasedOnData,
                // pointStyle: alternatePointStyles,
                hoverRadius: 15,
            }
        }
    }

    const [pickDate, pic] = useState("");
    const one = (pickDate[0])
    //  console.log(pickDate.0._d)

    const x = (JSON.stringify(allTotal))
    const xx = JSON.parse(x)

    const sum = xx.reduce((total, value) => total = total + parseInt(value), 0);
    console.log(xx)
    console.log(sum)

    return (
        <div >
            {/* <RangePicker onChange={(e) => pic(e)} /> */}
            <Layout>
                {/* <Content style={{ padding: '50px' }} className="site-layout-content" > */}
                <div >
                    <Divider />
                    <Row justify='center'>
                        {/* <Statistic title="ผู้เข้ารับบริการ" value={customerW} /> */}
                        <Statistic title="จำนวนหัตถการ" value={p7d.total, p6d.total, p5d.total, p4d.total, p3d.total, p2d.total, p1d.total, td} prefix='' style={{ margin: '0 32px' }} />
                    </Row>
                    <Divider />
                    <div >
                        <Bar data={data} options={options} smooth />
                    </div>
                    <Divider />
                </div>
                <div>
                    {/* {td.map(rec => <li> {rec} </li>)} */}

                    {/* {p1d} */}
                    {/* <List
                                    header={<div>All Record</div>}
                                    bordered
                                    dataSource={sumInd}
                                    renderItem={rec => (
                                        <List.Item>
                                            {rec.detail}
                                        </List.Item>
                                    )}
                                /> */}
                </div>
                {/* </Content> */}
            </Layout>
        </div>
    )
}