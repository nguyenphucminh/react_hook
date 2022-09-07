import {SET_TODO_INPUT, ADD_TODO} from './contanst'
const initState = {
    todo: '',
    todos: []
}
function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return{
                ...state,
                todo: action.payload
            }
        case ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            throw new Error('Invalid')
    }
}
export {initState}
export default reducer