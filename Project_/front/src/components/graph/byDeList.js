import React from "react";
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Layout, DatePicker } from 'antd';
import moment from "moment";

const { Content } = Layout;
// const { RangePicker } = DatePicker;


export default function SevenD() {
  const date = moment().format('D-MMM-YYYY');
  const yestd1 = moment().subtract(1, 'd').format('D-MMM-YYYY');
  const yestd2 = moment().subtract(2, 'd').format('D-MMM-YYYY');
  const yestd3 = moment().subtract(3, 'd').format('D-MMM-YYYY');
  const yestd4 = moment().subtract(4, 'd').format('D-MMM-YYYY');
  const yestd5 = moment().subtract(5, 'd').format('D-MMM-YYYY');
  const yestd6 = moment().subtract(6, 'd').format('D-MMM-YYYY');
  const yestd7 = moment().subtract(7, 'd').format('D-MMM-YYYY');

  const sum = (localStorage.getItem('summary'))
  const allD = JSON.parse(sum)

  const department = allD.map((rank, i, row) => {
    if (rank.user_code == 'OPD') {
      return localStorage.setItem('opdLA', JSON.stringify(rank))
    } else if (rank.user_code == 'Non-invasive') {
      return localStorage.setItem('nonLA', JSON.stringify(rank))
    } else if (rank.user_code == 'Cath-Lab') {
      return localStorage.setItem('cathLA', JSON.stringify(rank))
    } else if (rank.user_code == 'OR') {
      return localStorage.setItem('orLA', JSON.stringify(rank))
    } else {
      return 'other'
    }
  })

  const OPD = localStorage.getItem('opdLA')
  const NON = localStorage.getItem('nonLA')
  const CATH = localStorage.getItem('cathLA')
  const OR = localStorage.getItem('orLA')
  const dailyOP = JSON.parse(OPD) || 0
  const dailyN = JSON.parse(NON) || 0
  const dailyC = JSON.parse(CATH) || 0
  const dailyO = JSON.parse(OR) || 0
  console.log(OR) ////////////////// ต้องกรอกให้ตรง user_code

  // backgroundColor: 'rgb(255, 99, 132, 0.5)',  chompu
  // borderColor: 'rgba(255, 99, 132)',
  // backgroundColor: 'rgb(255, 159, 64, 0.5)',  
  // borderColor: 'rgba(255, 159, 64)',
  // backgroundColor: 'rgb(255, 205, 86, 0.5)',
  // borderColor: 'rgba(255, 205, 86)',
  // backgroundColor: 'rgb(75, 192, 192, 0.5)',
  // borderColor: 'rgba(75, 192, 192)',
  // backgroundColor: 'rgb(54, 162, 235, 0.5)',
  // borderColor: 'rgba(54, 162, 235)',
  // backgroundColor: 'rgb(153, 102, 255, 0.5)',
  // borderColor: 'rgba(153, 102, 255)',
  // backgroundColor: 'rgb(201, 203, 207, 0.5)',
  // borderColor: 'rgba(201, 203, 207)'

  const list = allD.map((rank, i, row) => {
    if (rank.detail.includes(date) && rank.user_code == 'OR') {
        // return console.log(rank);
        return localStorage.setItem('td', JSON.stringify(rank));
    } else if (rank.detail.includes(yestd1) && rank.user_code == 'OR') {
        return localStorage.setItem('1ag', JSON.stringify(rank));
    } else if (rank.detail.includes(yestd2) && rank.user_code == 'OR') {
        return localStorage.setItem('2ag', JSON.stringify(rank));
    } else if (rank.detail.includes(yestd3) && rank.user_code == 'OR') {
        return localStorage.setItem('3ag', JSON.stringify(rank));
    } else if (rank.detail.includes(yestd4) && rank.user_code == 'OR') {
        return localStorage.setItem('4ag', JSON.stringify(rank));
    } else if (rank.detail.includes(yestd5) && rank.user_code == 'OR') {
        return localStorage.setItem('5ag', JSON.stringify(rank));
    } else if (rank.detail.includes(yestd6) && rank.user_code == 'OR') {
        return localStorage.setItem('6ag', JSON.stringify(rank));
    } else if (rank.detail.includes(yestd7) && rank.user_code == 'OR') {
        return localStorage.setItem('7ag', JSON.stringify(rank));
    } else {
        return ''
    }
})

  const today = (localStorage.getItem('td'))
  const pass1d = (localStorage.getItem('1ag'))
  const pass2d = (localStorage.getItem('2ag'))
  const pass3d = (localStorage.getItem('3ag'))
  const pass4d = (localStorage.getItem('4ag'))
  const pass5d = (localStorage.getItem('5ag'))
  const pass6d = (localStorage.getItem('6ag'))
  const pass7d = (localStorage.getItem('7ag'))
  const td = JSON.parse(today) || 0
  const p1d = JSON.parse(pass1d) || 0
  const p2d = JSON.parse(pass2d) || 0
  const p3d = JSON.parse(pass3d) || 0
  const p4d = JSON.parse(pass4d) || 0
  const p5d = JSON.parse(pass5d) || 0
  const p6d = JSON.parse(pass6d) || 0
  const p7d = JSON.parse(pass7d) || 0

  const allTotal = [p7d.total, p6d.total, p5d.total, p4d.total, p3d.total, p2d.total, p1d.total, td.total]
  const allCustomer = [p7d.customer, p6d.customer, p5d.customer, p4d.customer, p3d.customer, p2d.customer, p1d.customer, td.customer]
  ///แผนกตัวเอง
  const allDate = [yestd7, yestd6, yestd5, yestd4, yestd3, yestd2, yestd1, date]

    const data = {
        labels: allDate,
        datasets: [
      // {
      //   label: 'OPD',
      //   data: dailyOP.amount,
      //   backgroundColor: 'rgb(255, 99, 132, 0.5)'
      // },
      // {
      //   label: 'Non',
      //   data: dailyN.amount,
      //   backgroundColor: 'rgb(255, 159, 64, 0.5)',
      // },
      // {
      //   label: 'Cath',
      //   data: dailyC.amount,
      //   backgroundColor: 'rgb(54, 162, 235, 0.5)',
      // },
      {
        label: 'Customer OR',
        data: allCustomer,
        backgroundColor: 'rgb(75, 192, 192, 0.5)',
      },
      {
        type: 'line',
        label: 'OR list',
        data: allTotal,
        // backgroundColor: 'rgb(75, 192, 192, 0.5)',
        tension: 0.3
      },
    ]
  };

  // const columns = [
  //   {title: 'แผนก',dataIndex: 'department',key: 'department',},
  //   {title: 'รายการ',keys: 'record',dataIndex: 'record',},
  //   {title: 'บันทึกล่าสุด',key: 'tags', dataIndex: 'tags',
  //     render: tags => (
  //       <>
  //         {tags.map(tag => {
  //           let color = tag == date ? 'green' : 'gold';
  //           return (
  //             <Tag color={color} key={tag}>
  //               {tag}
  //             </Tag>
  //           );
  //         })}
  //       </>
  //     ),},];

  // const dt = [
  //   {
  //     key: '1',
  //     department: 'OPD',
  //     record: [(totalOP.detail != null ? (totalOP.detail).slice(16, -2) : '')],
  //     tags: [(totalOP.detail != null ? (totalOP.detail).slice(2, 13) : '')],
  //   },
  //   {
  //     department: 'Non',
  //     record: [(totalN.detail != null ? (totalN.detail).slice(16, -2) : '')],
  //     tags: [(totalN.detail != null ? (totalN.detail).slice(2, 13) : '')],
  //   },
  //   {
  //     department: 'Cath',
  //     record: [(totalC.detail != null ? (totalC.detail).slice(16, -2) : '')],
  //     tags: [(totalC.detail != null ? (totalC.detail).slice(2, 13) : '')],
  //   },
  //   {
  //     department: 'OR',
  //     record: [(totalO.detail != null ? (totalO.detail).slice(16, -2) : '')],
  //     tags: [(totalO.detail != null ? (totalO.detail).slice(2, 13) : '')],
  //   },
  // ];

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }

  return (
    <div Width='100%' className="site-layout-content">

      {/* <Table columns={columns} dataSource={dt} /> */}
      <Layout>
        <div className="site-layout-content" >
          <div style={{ Height: '350px' }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      </Layout>
    </div>
  )
}