/**
 * 该文件专门用来暴露一个store对象，整个应用只有一个store对象
 */

//专门用来创建redux中最为核心的store
import { applyMiddleware, legacy_createStore } from "redux";
//引入未Count组件服务的reducer
import countReducer from './count_reducer'
//引入redux-thunk 用于支持异步action
import thunk from "redux-thunk";

export default legacy_createStore(countReducer, applyMiddleware(thunk))
