import React, { Component } from 'react'
import axios from "axios";

export default class index extends Component {

    search = () => {
        //获取用户输入
        const { keywordElement: { value } } = this
        //更新App state的状态
        this.props.updateAppState({ isFirst: false, isLoading: true })
        //发送网络请求
        axios.get(`/api/search/users?q=${value}`).then(
            response => {
                //更新App state的状态
                this.props.updateAppState({ isLoading: false, users: response.data.items })
            },
            error => {
                //更新App state的状态
                this.props.updateAppState({ isLoading: false, err: error.message })
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
