import { createSlice } from "@reduxjs/toolkit"
export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    input: "",
    todos: [],
  },
  reducers: {
    changeInput: (state, action) => {
      state.input = action.input
    },
    insert: (state, action) => {
      state.todos.push(action.todo)
    },
    toggle: (state, action) => {
      state.todos.forEach(
        (todo) => todo.id === action.id && todo.done === !todo.done
      )
    },
    remove: (state, action) => {
      state.todos.splice(
        state.todos.findIndex((todo) => todo.id === action.id),
        1
      )
    },
  },
})

export const { changeInput, insert, toggle, remove } = todosSlice.actions

export default todosSlice.reducer
