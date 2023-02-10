import { ADD_PERSON } from "../constant";

export default function personReducer(preState = [{ id: 1, name: "tom", age: 23 }], action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            // preState.unshift(data)
            return [data, ...preState]
        default:
            return preState
    }
}