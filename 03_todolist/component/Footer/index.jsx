import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    render() {
        const {todos} = this.props
        //pre 上一次的返回值，这里缺省0；todo本次数据遍历的元素
        //箭头函数只有一句话 return可省略
        const donecount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        const totalcount = todos.length

        return (
            <div className="todo-footer">
                <label>
                <input type="checkbox"/>
                </label>
                <span><span>已完成 {donecount}</span> / 全部 {totalcount}</span>
                <button onClick={this.props.clearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
