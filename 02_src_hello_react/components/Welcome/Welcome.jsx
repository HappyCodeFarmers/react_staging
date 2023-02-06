import React, {Component} from "react";
import welcome from './Welcome.module.css'

//创建自定义组件Welcome
export default class Welcome extends Component {
    render() {
        return (
            <h1 className={welcome.title}>Welcome!</h1>
        )
    }
}