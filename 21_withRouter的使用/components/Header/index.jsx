import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }

    go = () => {
        this.props.history.go(2)
    }

    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>后退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>前进N步</button>
            </div>
        )
    }
}

//withRouter 接收一个一般组件；加工一般组件，让一般组件具备路由组件所特有的API
export default withRouter(Header)
