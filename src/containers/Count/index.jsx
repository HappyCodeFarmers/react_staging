//引入Count的UI组件
import CountUI from '../../components/Count'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

import {createIncrementAction, createDecrementAction} from '../../redux/count_action'

//函数返回值作为状态传递给了UI组件props的key，value作为传递给UI组件props的value————————状态
function mapStateToProps(state) {
    return { count: state }
}

//函数返回的对象中的key作为传递给UI组件props的key，value就作为传递给UI组件props的value——————操作状态的方法
function mapDispatchToProps(dispatch) {
    return {
        increment: (value) => {
            //通知redux执行加法
            dispatch(createIncrementAction(value))
        },
        decrement: (value) => {
            //通知redux执行减法
            dispatch(createDecrementAction(value))
        },
        incrementAsync: (value, times) => {
            setTimeout(() => {
                dispatch(createIncrementAction(value))
            }, times)
        }
    }
}

//创建并暴露一个CountUI的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
