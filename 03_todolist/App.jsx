import React from "react";
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

//创建“外壳”组件
class App extends React.Component {

    //初始化状态
    state = {todos: [
        {id: '001', name:'任务1', done: true},
        {id: '002', name:'任务2', done: true},
        {id: '003', name:'任务3', done: false}
    ]}

    //用于添加一个todo，接收参数是todo对象
    addTodo = (todoObj)=>{
        //获取原todos
        const {todos} = this.state
        //追加一个todo
        const newTodos = [todoObj, ...todos]
        //更新状态
        this.setState({todos: newTodos})
    }

    //用于更新一个todo对象
    updateTodo = (id, done) => {
        const {todos} = this.state
        //匹配处理数据
        const newTodos = todos.map((todoObj)=>{
            if (todoObj.id == id) return {...todoObj, done}
            else return todoObj
        })
        this.setState({todos: newTodos})
    }

    //用于删除一个todo对象
    deleteTodo = (id) => {
        const {todos} = this.state
        //匹配处理数据
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id != id
        })
        this.setState({todos: newTodos})
    }

    clearAllDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos: newTodos})
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={this.state.todos} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}

//暴露App组件
export default App
