import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

    state = {
        users: [],
        isFirst: true, //是否为第一次打开页面
        isLoading: false, //是否处于加载中
        err: '' //存储请求相关的错误信息
    }

    componentDidMount() {
        //组件挂载完毕后订阅消息
        this.token = PubSub.subscribe('jianhao', (msg, data) => {
            this.setState(data)
        })
    }

    componentWillUnmount() {
        //组件将卸载时取消订阅消息
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state

        return (
            <div className="row">
                {
                    isFirst ? <h2>输入关键字，随后点击搜索...</h2> :
                    isLoading ? <h2>Loading...</h2> :
                    err ? <h2 style={{color: 'red'}}>{err}</h2> :
                    users.map((userObj)=>{
                        return (
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} target="_blank">
                                    <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
