/**
 * 该文件专门为Count组件生成action对象
 */
import store from './store'
import { INCREMENT, DECREMENT } from '../redux/constant'


export function createIncrementAction(data) {
    return { type: INCREMENT, data }
}

export function createDecrementAction(data) {
    return { type: DECREMENT, data }
}

//异步action，指action的值为函数
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction({ type: DECREMENT, data }))
        }, time)
    }
}
