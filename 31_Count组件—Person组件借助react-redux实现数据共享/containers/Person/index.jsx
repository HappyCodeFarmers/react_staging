import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'

import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj)
    }

    render() {
        return (
            <div>
                <h3>Person 组件, 上方组件求和为：{this.props.count}</h3>
                <input ref={c => this.nameNode = c} type="text" placeholder='名字' />
                <input ref={c => this.ageNode = c} type="text" placeholder='年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.person.map((personObj) => {
                            return <li key={personObj.id}>{personObj.name}-----{personObj.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

//映射状态
const mapStateToProps = state => ({ person: state.person, count: state.count })
//映射操作状态的方法
const mapDispatchToProps = {
    addPerson: createAddPersonAction
}


export default connect(mapStateToProps, mapDispatchToProps)(Person)