import React, { Component } from 'react'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'


//定义UI组件
class Count extends Component {

    increment = () => {
        const { value } = this.selectNumber
        this.props.increment(value * 1)
    }

    decrement = () => {
        const { value } = this.selectNumber
        this.props.decrement(value * 1)
    }

    //奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const { count } = this.props
        if (!(count % 2)) return
        this.props.increment(value * 1)
    }

    //异步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.incrementAsync(value * 1, 500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}

//映射状态
const mapStateToProps = state => ({ count: state })
//映射操作状态的方法
const mapDispatchToProps = {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
}

//创建并暴露一个CountUI的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Count)
