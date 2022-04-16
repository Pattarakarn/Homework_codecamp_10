import React from "react";
import { Row, Col, Card, Badge } from 'antd';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export default function Contents() {

    function adjustRadiusBasedOnData(ctx) {
        const v = ctx.parsed.y;
        return v < 3 ? 5
            : v < 5 ? 7
                : v < 7 ? 9
                    : v < 10 ? 11
                        : 15;
    }

    const customerOPD = localStorage.getItem('customerOPD')
    const customerN = localStorage.getItem('customerN')
    const customerC = localStorage.getItem('customerC')
    const customerOR = localStorage.getItem('customerOR')
    const totalOPD = localStorage.getItem('totalOPD')
    const totalN = localStorage.getItem('totalN')
    const totalC = localStorage.getItem('totalC')
    const totalOR = localStorage.getItem('totalOR')

    const data = {
        labels: ['OPD', 'Non', 'Cath', 'OR'],
        datasets: [
            {
                tension: 0.3,
                type: 'line',
                label: 'ผู้เข้ารับบริการ',
                backgroundColor: '#ffec3d',
                data: [customerOPD, customerN, customerC, customerOR],
                // pointStyle: 'star',
                pointRadius: 6,
                segment: {
                    // borderDash: ctx => skipped(ctx, [6, 6]),
                }
            },
            {
                type: 'bar',
                label: 'จำนวนหัตถการทั้งหมด',
                data: [totalOPD, totalN, totalC, totalOR],
                backgroundColor: '#F0F0F0',
                // borderColor: 'rgb(255, 99, 132)',
            },

        ]
    };

    const options = {
        element: {
            point: {
                // hoverBackgroundColor: makeHalfAsOpaque,
                // radius: adjustRadiusBasedOnData,
                // pointStyle: alternatePointStyles,
                // hoverRadius: 15,
            }
        }
    }

    const listN = localStorage.getItem('ListN')
    const ListN = JSON.parse(listN)
    const listC = localStorage.getItem('ListC')
    const ListC = JSON.parse(listC)
    const listOR = localStorage.getItem('ListOR')
    const ListOR = JSON.parse(listOR)
    const listOPD = localStorage.getItem('ListOPD')
    const ListOPD = JSON.parse(listOPD)

    return (
        <div style={{ padding: '25px' }}>
            {/* <div class="row"> */}
            <Row>

                {/* <Col span={12}> */}
                <Col flex={1}>
                    <Card title="OPD" hoverable='true'>
                        {ListOPD == null || ListOPD[0] == null || totalOPD == 0 ?
                            <div style={{ backgroundColor: '#ffd6e7' }}>ไม่พบข้อมูล</div>
                            :
                            <div>
                                ผู้รับบริการ <Badge style={{ backgroundColor: 'yellow', color: 'black' }} count={customerOPD} /> ราย <br />
                                <Badge style={{ backgroundColor: 'hotpink' }} count={totalOPD} /> หัตถการ
                            </div>
                        }
                    </Card>

                </Col>
                <Col flex={1}>
                    {/* <Col span={12}> */}

                    <Card title="Non-invasive" hoverable='true'>
                        {ListN == null || ListN[0] == null || totalN == 0 ?
                            <div style={{ backgroundColor: 'rgba(255, 128, 0, 0.2' }}>ไม่พบข้อมูล</div>
                            :
                            <div>
                                ผู้รับบริการ <Badge style={{ backgroundColor: 'yellow', color: 'black' }} count={customerN} /> ราย <br />
                                <Badge style={{ backgroundColor: 'orange' }} count={totalN} /> หัตถการ
                            </div>
                        }
                    </Card>

                </Col>
                <Col flex={1}>
                    {/* <Col span={12}> */}

                    <Card title="Cath-Lab" hoverable='true' >
                        {ListC == null || ListC[0] == null || totalC == 0 ?
                            <div style={{ backgroundColor: '#d6e4ff' }}>ไม่พบข้อมูล</div>
                            :
                            <div>
                                ผู้รับบริการ <Badge style={{ backgroundColor: 'yellow', color: 'black' }} count={customerC} /> ราย <br />
                                <Badge style={{ backgroundColor: 'blue' }} count={totalC} /> หัตถการ
                            </div>
                        }
                    </Card>

                </Col>
                {/* <Col span={12}> */}
                <Col flex={1}>
                    <Card title="OR" hoverable='true' >
                        {ListOR == null || ListC[0] == null || totalOR == 0 ?
                            <div style={{ backgroundColor: '#98DECF' }}>ไม่พบข้อมูล</div>
                            :
                            <div>
                                ผู้รับบริการ <Badge style={{ backgroundColor: 'yellow', color: 'black' }} count={customerOR} /> ราย <br />
                                <Badge style={{ backgroundColor: 'green' }} count={totalOR} /> หัตถการ
                            </div>
                        }
                    </Card>

                </Col>
            </Row>

            <Bar data={data} options={options} />

        </div>
    )
}