import React from "react";

//引入时若组件jsx文件是index.jsx可省略不写
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";

//创建“外壳”组件
class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome/>
            </div>
        )
    }
}

//暴露App组件
export default App
