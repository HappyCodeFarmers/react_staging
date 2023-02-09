/**
 * 该文件用于创建一个为Count组件服务的reducer，reducer本质是一个函数
 * reducer函数接收两个参数，分别为 之前的状态preState，动作对象action
 */

export default function countReducer(preState=0, action) {
    //从action对象中获取type，data
    const { type, data } = action
    //根据type决定如何处理数据
    switch (type) {
        case 'increment':   //加
            return preState + data
        case 'decrement':   //减
            return preState - data
        default:
            return preState
    }
}
