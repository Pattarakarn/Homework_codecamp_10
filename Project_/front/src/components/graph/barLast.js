import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import axios from "../../config/axios";
import { Layout, Row, Statistic, Divider, Button, Card } from 'antd';
const { Content } = Layout;

export default function DataLast() {

  const sum = (localStorage.getItem('summary'))
  const all = JSON.parse(sum)
  // console.log(all)

  const summ = all.map((rank, i, row) => {
    if (i + 1 === row.length) {
      return localStorage.setItem('lastS', JSON.stringify(rank));
    } else {
      return '-';
    }
  })

  const customer = (localStorage.getItem('lastS'))
  const ctm = JSON.parse(customer)

  const toD = (localStorage.getItem('allDaily'))
  const last = JSON.parse(toD)
  const list = last.map((rank, i, row) => {
    if (i + 1 === row.length) {
      return localStorage.setItem('lastList', JSON.stringify(rank));
    } else {
      return '-';
    }
  })
  const dat = (localStorage.getItem('lastList'))
  const dataLA = JSON.parse(dat)
  const dataList = JSON.parse(dataLA.list)
  const dataAmount = JSON.parse(dataLA.amount)
  // console.log(dataLA)

  const data = {
    labels: dataList,
    datasets: [
      {
        label: dataLA.amount,
        // data: (dataLA.amount).map(function (value) {
        //   return value >= 10 ? value : null
        // }),
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: dataAmount,
      }
    ]
  };

  const refresh = () => {
    window.location.reload();
  }

  const arrayLabel = ["Total", "301 Redirect", "Broken Pages (4xx Errors)", "Uncategorised HTTP Response Codes", "5xx Errors", "Unauthorised Pages", "Non-301 Redirects"]
  const arrayData = [16, 1, 14, 0, 0, 0, 1];

  const arrayOfObj = arrayLabel.map(function (d, i) {
    return {
      label: d,
      data: arrayData[i] || 0
    };
  });

  // const sortedArrayOfObj = arrayOfObj.sort(function (a, b) {
  //   return b.data > a.data;
  // });

  // const newArrayLabel = [];
  // const newArrayData = [];
  // const x = sortedArrayOfObj.forEach(function (d) {
  //   newArrayLabel.push(d.label);
  //   newArrayData.push(d.data);
  // });

  // console.log(newArrayLabel);
  // console.log(newArrayData);

  return (
    <div>

      <Card>
        <table>
          <td>
            <div >
              <br />
              {/* รายการบันทึกล่าสุด <br />
              <Divider /> */}
              <Row justify='center'>
                <Statistic title="ผู้เข้ารับบริการ" value={ctm.customer} />
                <Statistic title="จำนวนหัตถการ" value={ctm.total} prefix='' style={{ margin: '0 32px' }} />
              </Row>
              <Divider />
              {ctm.detail}
              <Divider />
              <div>
                <Bar data={data} />
              </div>
            </div>
          </td>
        </table>
      </Card>
      {/* <Layout>
        <t
        {/* </div> */}
      {/* <Content style={{ padding: '0 50px', maxWidth: '66%' }}>
      </Content>
    </Layout> * /} */}
    </div >
  )
}