/**
 * 该文件专门用来暴露一个store对象，整个应用只有一个store对象
 */

//专门用来创建redux中最为核心的store
import { legacy_createStore } from "redux";
//引入未Count组件服务的reducer
import countReducer from './count_reducer'

export default legacy_createStore(countReducer)

