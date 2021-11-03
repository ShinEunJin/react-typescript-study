import React, { useState, useRef, useCallback } from "react"

import TodoInsert from "./components/TodoInsert"
import TodoList from "./components/TodoList"
import TodoTemplate from "./components/TodoTemplate"

interface todosType {
  id: number
  text: string
  checked: boolean
}

function App() {
  const [todos, setTodos] = useState<todosType[]>([])

  const nextId = useRef(0)

  const onInsert = useCallback(
    (text: string) => {
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

  const onRemove = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    },
    [todos]
  )

  const onToggle = useCallback(
    (id: number) => {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
    },
    [todos]
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList onToggle={onToggle} todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  )
}

export default App
