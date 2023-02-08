import React, { Component } from 'react'
// import qs from 'query-string'

const data = [
    { id: '01', content: '你好，中国' },
    { id: '02', content: '你好，未来的自己' },
    { id: '03', content: '你好不了一点' }
]

export default class Detail extends Component {
    render() {
        //接收params参数
        const { id, title } = this.props.match.params

        //接收search参数
        // const {search} = this.props.location
        // const {id, title} = qs.parse(search.slice(1))

        //接收state参数
        // const {id, title} = this.props.location.state || {}
        const findResult = data.find((detailObj) => {
            return detailObj.id == id
        }) || {}
        return (
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONTENT: {findResult.content}</li>
            </ul>
        )
    }
}
