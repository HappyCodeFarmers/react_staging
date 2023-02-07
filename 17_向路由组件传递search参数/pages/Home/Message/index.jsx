import React, { Component } from 'react'
import Detail from './Detail'
import { Link, Route } from 'react-router-dom'

export default class Message extends Component {

    state = {
        messageArr: [
            { id: '01', title: "消息1" },
            { id: '02', title: "消息2" },
            { id: '03', title: "消息3" }
        ]
    }

    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件携带params参数 */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                                    {/* 向路由组件携带search参数 */}
                                    <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 注册路由 — 声明接受params参数*/}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                {/* 注册路由 — search参数无需声明接收*/}
                <Route path="/home/message/detail" component={Detail} />
            </div>
        )
    }
}
