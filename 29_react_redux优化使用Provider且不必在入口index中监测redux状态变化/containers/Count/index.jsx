//引入Count的UI组件
import CountUI from '../../components/Count'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

//映射状态
const mapStateToProps = state => ({ count: state })

//映射操作状态的方法

//  一般写法
// function mapDispatchToProps(dispatch) {
//     return {
//         increment: (value) => {
//             //通知redux执行加法
//             dispatch(createIncrementAction(value))
//         },
//         decrement: (value) => {
//             //通知redux执行减法
//             dispatch(createDecrementAction(value))
//         },
//         incrementAsync: (value, times) => {
//             setTimeout(() => {
//                 dispatch(createIncrementAction(value))
//             }, times)
//         }
//     }
// }

//  精简写法, 指定action，底层react-redux会自动dispatch，通知redux更新状态
const mapDispatchToProps = {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
}

//创建并暴露一个CountUI的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
