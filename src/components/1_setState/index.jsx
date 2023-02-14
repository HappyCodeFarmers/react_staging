import React, { Component } from 'react'

export default class Demo extends Component {

    state = {count: 0}

    add = () => {
        const {count} = this.state
        //回调函数是可选参数，react在状态更新完后页面更新后将调用
        //对象式的setState
        // this.setState({count: count + 1}, () => {
            // console.log("更新好之后的回调:", this.state.count)
        // })
        //函数式的setState
        this.setState((state, props) => {
            return {count: state.count + 1}
        })
        //对象式的setState是函数式的一种简写方式
    }

    render() {
        return (
            <div>
                <h4>当前计数：{this.state.count}</h4>
                <button onClick={this.add}>+1</button>
            </div>
        )
    }
}
