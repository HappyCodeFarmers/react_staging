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

    replaceShow = (id, title) => {
        //replace跳转+携带params参数
        this.props.history.replace(`/home/message/detail/${id}/${title}`)

        //replace跳转+携带search参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        //replace跳转+携带satte参数
        // this.props.history.replace(`/home/message/detail`, {id, title})
    }

    pushShow = (id, title) => {
        //push跳转+携带params参数
        this.props.history.push(`/home/message/detail/${id}/${title}`)

        //push跳转+携带search参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

        //push跳转+携带state参数
        // this.props.history.push(`/home/message/detail`, {id, title})
    }

    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }

    go = () => {
        this.props.history.go(2)
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
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                                    <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push查看</button>
                                    <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>replace查看</button>

                                    {/* 向路由组件携带search参数 */}
                                    {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                                    {/* 向路由组件携带state参数 */}
                                    {/* <Link replace to={{pathname: '/home/message/detail', state: {id:msgObj.id, title: msgObj.title}}}>{msgObj.title}</Link> */}
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 注册路由 — 声明接受params参数*/}
                <Route path="/home/message/detail/:id/:title" component={Detail} />

                {/* 注册路由 — search参数无需声明接收*/}
                {/* <Route path="/home/message/detail" component={Detail} /> */}

                {/* 注册路由 — state参数无需声明接收*/}
                {/* <Route path="/home/message/detail" component={Detail} /> */}

                <button onClick={this.back}>后退</button> |||
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>前进N步</button>
            </div>
        )
    }
}
