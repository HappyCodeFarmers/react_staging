import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import axios from "axios";

export default class index extends Component {

    search = () => {
        //在合适的时候发布消息
        //获取用户输入
        const { keywordElement: { value } } = this
        //更新List state的状态
        PubSub.publish('jianhao', { isFirst: false, isLoading: true })
        //发送网络请求
        axios.get(`/api/search/users?q=${value}`).then(
            response => {
                //更新List state的状态
                PubSub.publish('jianhao', { isLoading: false, users: response.data.items })
            },
            error => {
                //更新List state的状态
                PubSub.publish('jianhao', { isLoading: false, err: error.message })
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c => this.keywordElement = c} type="text" placeholder="输入关键词点击搜索..." />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
