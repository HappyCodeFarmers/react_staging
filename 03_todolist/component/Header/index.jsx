import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  //按键回调函数
  handlerKeyUp = (event)=>{
    //解构赋值获取变量
    const {keyCode, target} = event
    if (keyCode != 13) return
    if (target.value.trim() == '') return
    this.props.addTodo({id: nanoid(), name: target.value, done: false})
    target.value = ""
  }

  render() {
    return (
        <div className="todo-header">
            <input onKeyUp={this.handlerKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
    )
  }
}
