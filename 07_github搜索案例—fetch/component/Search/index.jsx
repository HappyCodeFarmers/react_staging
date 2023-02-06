import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import axios from "axios";

export default class index extends Component {

    search = async () => {
        /*在合适的时候发布消息*/

        const { keywordElement: { value } } = this //获取用户输入
        //更新List state的状态
        PubSub.publish('jianhao', { isFirst: false, isLoading: true })

        //fetch 优化过
        try {
            const response = await fetch(`/api/search/users2?q=${value}`)
            const data = await response.json()
            console.log(data)
            PubSub.publish('jianhao', { isLoading: false, users: data.items })
        } catch (err) {
            console.log(err, "请求出错")
            PubSub.publish('jianhao', { isLoading: false, err: err.message })
        }

        //fetch 未优化
        // fetch(`/api/search/users2?q=${value}`).then(
        //     response => {
        //         return response.json()
        //     }
        // ).then(
        //     response => {
        //         console.log(response, "获取数据成功了")
        //     }
        // //统一处理错误
        // ).catch(
        //     error => {console.log(error, "请求出错")}
        // )

        //发送网络请求--使用axios
        // axios.get(`/api/search/users2?q=${value}`).then(
        //     response => {
        //         //更新List state的状态
        //         PubSub.publish('jianhao', { isLoading: false, users: response.data.items })
        //     },
        //     error => {
        //         //更新List state的状态
        //         PubSub.publish('jianhao', { isLoading: false, err: error.message })
        //     }
        // )
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
