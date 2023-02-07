import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}
                            {/* 在react中靠路由链接实现切换组件 --编写路由链接*/}
                            <MyNavLink to='/about' title='About'>About</MyNavLink>
                            <MyNavLink to='/home' title='Home'>Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 - 包裹Switch标签，在匹配到路由后不会再继续匹配*/}
                                <Switch>
                                    <Route exact path="/about" component={About}/>
                                    <Route exact path="/home" component={Home}/>
                                    {/* 都未匹配上时 走Redirect指定的路由 */}
                                    <Redirect to="/"/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
