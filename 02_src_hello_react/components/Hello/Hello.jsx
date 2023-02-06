import React, {Component} from "react";
import hello from  './Hello.module.css'

//创建自定义组件，Hello，作为App组件的子组件展示
export default class Hello extends Component {
    render() {
        return (
            <h1 className={hello.title}>Hello React!</h1>
        )
    }
}