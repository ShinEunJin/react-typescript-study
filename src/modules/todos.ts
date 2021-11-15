const CHANGE_INPUT = "todos/CHANGE_INPUT"
const INSERT = "todos/INSERT"
const TOGGLE = "todos/TOGGLE"
const REMOVE = "todos/REMOVE"

export const changeInput = (input: string) => ({
    type: CHANGE_INPUT,
    input
})

let id = 3
export const insert = (text: string) => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
})

export const toggle = (id: number) => ({
    type: TOGGLE,
    id
})

export const remove = (id: number) => ({
    type: REMOVE,
    id
})

const initialState = {
    input: "",
    todos: [
        {
            id: 1,
            text: "테스트 1",
            done: true
        },
        {
            id: 2,
            text: "테스트 2",
            done: false
        }
    ]
}

const todos = (state = initialState, action: { type: string, input: string, todo: {}, id: number }) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            }
        case INSERT:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo)
            }
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        default:
            return state
    }
}

export default todos