import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Layout, Row, Statistic, Divider, Button } from 'antd';
import moment from "moment";
const { Content } = Layout;

export default function DataToday() {

  const sum = (localStorage.getItem('summary'))
  const all = JSON.parse(sum)
  console.log(all)

  const summ = all.map((rank, i, row) => {
    if (i + 1 === row.length) {
      return localStorage.setItem('todayS', JSON.stringify(rank));
    } else {
      return '-';
    }
  })

  const customer = (localStorage.getItem('todayS'))
  const ctm = JSON.parse(customer)

  const allD = (localStorage.getItem('allDaily'))
  const today = JSON.parse(allD)

  const Date = moment().format('D-MMM-YYYY');

  const list = today.map((rank) => {
    if (rank.date == Date) {
      return localStorage.setItem('todayL', JSON.stringify(rank));
    } else {
      return 'no data';
    }
  })

  const dat = (localStorage.getItem('todayL'))
  const dataLA = JSON.parse(dat)
  const dataList = JSON.parse(dataLA.list)
  const dataAmount = JSON.parse(dataLA.amount)
  console.log(dataAmount)

  const data = {
    labels: dataList,
    datasets: [
      {
        label: dataLA.date,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: dataAmount,
      }
    ]
  };

  const refresh = () => {
    window.location.reload();
  }

  return (
    <div>
      <Layout>
        <table>
          <td>
            <div className="site-layout-content" >
              รายการบันทึกวันนี้
              <Button disabled onclick={refresh}> Refresh </Button>
              <Divider />
              <Row justify='center'>
                <Statistic title="ผู้เข้ารับบริการ" value={ctm.customer} />
                <Statistic title="จำนวนหัตถการ" value={ctm.total} prefix='' style={{ margin: '0 32px' }} />
              </Row>
              <Divider />

              <div>
                <Bar data={data} />
              </div>

              <Divider />
              {ctm.detail}
              <Divider />

            </div>
          </td>
          <td>

          </td>
        </table>
        {/* </div> */}
        <Content style={{ padding: '0 50px', maxWidth: '66%' }}>
        </Content>
      </Layout>
    </div>
  )
}