import React, { useEffect, useState } from 'react';
import Foot from '../general/footer';
import Head from "../general/head";
import axios from 'axios';
import { Button, DatePicker, Menu, Divider, Dropdown } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Contents from '../Summary/content';
import { EyeOutlined, DownOutlined } from '@ant-design/icons';

export default function All() {

  useEffect(() => {
    if (axios.get('/nonlist') != null) {
      axios.get("/nonlist").then((res) => {
        localStorage.setItem('allNon', JSON.stringify(res.data))
      })
    }
    if (axios.get('/cathlist') != null) {
      axios.get("/cathlist").then((res) => {
        localStorage.setItem('allCath', JSON.stringify(res.data))
      })
    }
    if (axios.get('/orlist') != null) {
      axios.get("/orlist").then((res) => {
        localStorage.setItem('allOR', JSON.stringify(res.data))
      })
    }
    if (axios.get('/opdlist') != null) {
      axios.get("/opdlist").then((res) => {
        localStorage.setItem('allOPD', JSON.stringify(res.data))
      })
    }
  })

  const [display, select] = useState('none')
  const [picker, pick] = useState('')
  const [color, colors] = useState('')
  const [format, formats] = useState()

  const sDate = () => { pick(''); formats('D-MMM-YYYY'); }
  const sMonth = () => { pick('month'); formats('MMM-YYYY') }
  const sYear = () => { pick('year'); formats('YYYY') }

  const [content, ccontent] = useState()

  function onChange(date, dateString) {
    colors('purple')
    localStorage.setItem('select', dateString)
    const non = localStorage.getItem('allNon')
    const allNon = JSON.parse(non)
    const cath = localStorage.getItem('allCath')
    const allCath = JSON.parse(cath)
    const opd = localStorage.getItem('allOPD')
    const allOPD = JSON.parse(opd)
    const or = localStorage.getItem('allOR')
    const allOR = JSON.parse(or)

    if (dateString == '') {
      ccontent('')
      localStorage.removeItem('ListN')
      localStorage.removeItem('ListC')
      localStorage.removeItem('ListOR')
      localStorage.removeItem('ListOPD')
      localStorage.removeItem('customerN')
      localStorage.removeItem('customerC')
      localStorage.removeItem('customerOR')
      localStorage.removeItem('customerOPD')
      localStorage.removeItem('totalN')
      localStorage.removeItem('totalC')
      localStorage.removeItem('totalOR')
      localStorage.removeItem('totalOPD')
    } else if (dateString.length >= '10') {
      ccontent(<Contents />)
      const Non = allNon.map((rank) => {
        if ((rank.date) == dateString) {
          console.log(rank)
          localStorage.setItem('ListN', JSON.stringify(rank))
          localStorage.setItem('customerN', rank.customer)
          localStorage.setItem('totalN', rank.total)
        }
      })
      const Cath = allCath.map((rank) => {
        if ((rank.date) == dateString) {
          localStorage.setItem('ListC', JSON.stringify(rank))
          localStorage.setItem('customerC', rank.customer)
          localStorage.setItem('totalC', rank.total)
        }
      })
      const OR = allOR.map((rank) => {
        if ((rank.date) == dateString) {
          localStorage.setItem('ListOR', JSON.stringify(rank))
          localStorage.setItem('customerOR', rank.customer)
          localStorage.setItem('totalOR', rank.total)
        }
      })
      const OPD = allOPD.map((rank) => {
        if ((rank.date) == dateString) {
          localStorage.setItem('ListOPD', JSON.stringify(rank))
          localStorage.setItem('customerOPD', rank.customer)
          localStorage.setItem('totalOPD', rank.total)
        }
      })
    } else if (dateString.length > '1') {
      ccontent(<Contents />)
      const non = allNon.map((rank) => {
        if ([rank.date].toString().includes(dateString)) {
          return rank
          // } else {
          // return { customer: 0, total: 0 }
        }
      })
      const cath = allCath.map((rank) => {
        if ([rank.date].toString().includes(dateString)) {
          return rank
        }
      })
      const opd = allOPD.map((rank) => {
        if ([rank.date].toString().includes(dateString)) {
          return rank
        }
      })
      const or = allOR.map((rank) => {
        if ([rank.date].toString().includes(dateString)) {
          return rank
        }
      })
      localStorage.setItem('ListN', JSON.stringify(non))
      const totalN = non.reduce((sumCustomer, rank) => sumCustomer + rank.total, 0)
      const customerN = non.reduce((sumCustomer, rank) => sumCustomer + rank.customer, 0)
      localStorage.setItem('totalN', totalN)
      localStorage.setItem('customerN', customerN)

      localStorage.setItem('ListC', JSON.stringify(cath))
      const totalC = cath.reduce((sumCustomer, rank) => sumCustomer + rank.total, 0)
      const customerC = cath.reduce((sumCustomer, rank) => sumCustomer + rank.customer, 0)
      localStorage.setItem('totalC', totalC)
      localStorage.setItem('customerC', customerC)

      localStorage.setItem('ListOPD', JSON.stringify(opd))
      const totalOP = opd.reduce((sumCustomer, rank) => sumCustomer + rank.total, 0)
      const customerOP = opd.reduce((sumCustomer, rank) => sumCustomer + rank.customer, 0)
      localStorage.setItem('totalOPD', totalOP)
      localStorage.setItem('customerOPD', customerOP)

      localStorage.setItem('ListOR', JSON.stringify(or))
      const totalO = or.reduce((sumCustomer, rank) => sumCustomer + rank.total, 0)
      const customerO = or.reduce((sumCustomer, rank) => sumCustomer + rank.customer, 0)
      localStorage.setItem('totalOR', totalO)
      localStorage.setItem('customerOR', customerO)
    }
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a rel="" href="/download">
          Download
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <div>
      <Head />

      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <Button type="default" style={{ color: 'white', backgroundColor: 'purple', borderRadius: '20px' }}
            icon={<EyeOutlined />} >
            View
            <DownOutlined />
          </Button>
        </a>
      </Dropdown>

      <Divider />

      <div className='content'>
        Select:
        <Button type="link" onClick={() => { sDate(); select() }}>Date</Button>
        <Button type="link" onClick={() => { sMonth(); select(); }}>Month</Button>
        <Button type="link" onClick={() => { sYear(); select(); }}>Year</Button>

        <Content style={{ display: display, paddingTop: '18px' }}>
          <div style={{ height: '3em' }}>

            <DatePicker style={{ borderColor: color }}
              onChange={onChange}
              picker={picker} format={format} />

          </div>
        </Content>
        {content}
      </div>

      <Foot />
    </div >
  );
}