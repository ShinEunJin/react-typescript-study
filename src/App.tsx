import React, { useState, useRef, useCallback } from "react"

import TodoInsert from "./components/TodoInsert"
import TodoList from "./components/TodoList"
import TodoTemplate from "./components/TodoTemplate"
import "./App.scss"

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "빨래방 가기",
      checked: true,
    },
    {
      id: 2,
      text: "화장실 청고",
      checked: true,
    },
    {
      id: 3,
      text: "백신 맞기",
      checked: false,
    },
  ])

  const nextId = useRef(4)

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      }
      setTodos([...todos, todo])
      nextId.current += 1
    },
    [todos]
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  )
}

export default App
