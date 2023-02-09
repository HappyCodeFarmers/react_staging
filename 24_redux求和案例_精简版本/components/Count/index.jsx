import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {

    componentDidMount() {
        //监测redux中状态的变化，只要变化，就更新页面
        store.subscribe(() => {
            this.forceUpdate()
        })
    }

    increment = () => {
        const { value } = this.selectNumber
        store.dispatch({ type: "increment", data: parseInt(value) })
    }

    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch({ type: "decrement", data: parseInt(value) })
    }

    //奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState(0)
        if (!(count % 2)) return
        store.dispatch({ type: "increment", data: parseInt(value) })
    }

    incrementAsync = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        setTimeout(() => {
            store.dispatch({ type: "increment", data: parseInt(value) })
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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
