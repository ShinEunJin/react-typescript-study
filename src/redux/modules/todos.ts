import { action, createAction, createReducer } from "typesafe-actions"

const CHANGE_INPUT = "todos/CHANGE_INPUT"
const INSERT = "todos/INSERT"
const TOGGLE = "todos/TOGGLE"
const REMOVE = "todos/REMOVE"

interface IReducer {
    [CHANGE_INPUT]: 
}

export const changeInput = createAction(CHANGE_INPUT, action => (input: string) => action({ input }))

let id = 1
export const insert = createAction(INSERT, (text: string) => ({
    id: id++,
    text,
    done: false
}))

export const toggle = createAction(TOGGLE, (id: number) => id)

export const remove = createAction(REMOVE, (id: number) => id)

const initialState: { input: string, todos: { id: number, done: boolean }[] } = {
    input: "",
    todos: []
}

const todos = handleActions({
    [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),

}, initialState)

export default todos