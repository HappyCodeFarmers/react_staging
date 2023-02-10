/**
 * 该文件专门用来暴露一个store对象，整个应用只有一个store对象
 */

//专门用来创建redux中最为核心的store
import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
//引入为Person组件服务的reducer
import personReducer from "./reducers/person";

//引入redux-thunk 用于支持异步action
import thunk from "redux-thunk";

//汇总所有的reducer
const allReducer = combineReducers({
    count: countReducer,
    person: personReducer
})

export default legacy_createStore(allReducer, applyMiddleware(thunk))
