import { createSlice } from "@reduxjs/toolkit"

let id = 1
export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    input: "",
    todos: [],
  } as { input: string, todos: { id: number, text: string, done: boolean }[] },
  reducers: {
    changeInput: (state, action) => {
      state.input = action.payload
    },
    insert: (state, action) => {
      state.todos.push({ id: id++, text: action.payload, done: false })
    },
    toggle: (state, action) => {
      const selected: any = state.todos.find((todo) => todo.id === action.payload)
      selected.done = !selected.done
    },
    remove: (state, action) => {
      state.todos.splice(
        state.todos.findIndex((todo) => todo.id === action.payload),
        1
      )
    },
  },
})

export const { changeInput, insert, toggle, remove } = todosSlice.actions

export default todosSlice.reducer
