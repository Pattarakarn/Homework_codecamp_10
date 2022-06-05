import { Button, Popconfirm, Popover, Timeline } from 'antd'
import { Footer } from 'antd/lib/layout/layout'
import moment from 'moment'
import React, { useState } from 'react'
import { __RouterContext } from 'react-router'
import Heads from '../general/head'
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function Service(props) {
    const menus = (
        <div style={{ display: 'inline-flex', alignSelf: 'center' }}>
            <Button type="default" style={{ border: 'none' }}>
                <a rel="" href="/">
                    View
                </a>
            </Button>
            <Button type="text">
                Manage
            </Button>
            <Button type="default" style={{ border: 'none' }}>
                <a rel="" href="/download">
                    Download
                </a>
            </Button>
        </div>
    )

    const [menu, setMenu] = useState('Manage')

    const all = localStorage.getItem('all')
    const allS = JSON.parse(all)
    const allSum = allS.sort((a, b) => new Date(b.date) - new Date(a.date))
    allSum.map(e => {
        if (Object.entries(e).length === 12) {
            Object.assign(e, { code: 'opdlist' })
        } else if (Object.entries(e).length === 17) {
            Object.assign(e, { code: 'cathlist' })
        } else if (Object.entries(e).length === 18) {
            Object.assign(e, { code: 'orlist' })
        } else if (Object.entries(e).length === 22) {
            Object.assign(e, { code: 'nonlist' })
        }
    })

    const del = (key, val) => {
        // if (typeof(key) !== 'number') {
        axios.delete(`/${val}/${key}`);
        props.history.push("/");
    }

    function cancel(e) {
        console.log('Click on No');
    }

    return (
        <div>
            <Heads />

            <div style={{ height: '50px', padding: '20px' }}
                onMouseOver={() => setMenu(menus)}
                onMouseLeave={() => setMenu('Manage')}>
                {menu}
            </div>

            <div style={{ padding: '27px' }}>
                <Timeline mode="left">
                    {allSum.map((ele) => (
                        <Timeline.Item
                            color={
                                ele.code === "opdlist" ? "hotpink"
                                    :
                                    ele.code === "nonlist" ? "orange"
                                        :
                                        ele.code === "cathlist" ? "blue"
                                            :
                                            "green"
                            }
                            label={ele.date}>
                            <Popover placement='bottom'
                                title={` ผู้บันทึก(${ele.code}) ${ele.recorder} `}
                                content={`${moment(ele.updatedAt).format('DD-MMM-YY hh:mm')}`}

                            >
                                <Button type='text'>
                                    {`ยอดทั้งหมด ${ele.customer} จาก ${ele.total} คน`}
                                    <br />
                                </Button>
                            </Popover>

                            <Popconfirm
                                title="Are you sure delete this record?"
                                okText="Yes"
                                cancelText="No"
                                onConfirm={() => del(ele.id, ele.code)}
                                onCancel={cancel}
                            >
                                <DeleteOutlined />
                            </Popconfirm>

                        </Timeline.Item>
                    ))}
                </Timeline>
            </div>

            <Footer />
        </div >
    )
}

export default withRouter(Service);