import React, { useState, useRef, useCallback } from "react"

import TodoInsert from "./components/TodoInsert"
import TodoList from "./components/TodoList"
import TodoTemplate from "./components/TodoTemplate"

interface todosType {
  id: number
  text: string
  checked: boolean
}

const LIMIT = 10000

const createBulkTodos = () => {
  let array = []
  for (let i = 1; i < LIMIT; i++) {
    let todo = {
      id: i,
      text: `할 일 ${i}`,
      checked: false
    }
    array.push(todo)
  }
  return array
}

function App() {
  const [todos, setTodos] = useState<todosType[]>(createBulkTodos)

  const nextId = useRef(LIMIT)

  const onInsert = useCallback(
    (text: string) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      }
      setTodos(todos => [...todos, todo])
      nextId.current += 1
    },
    []
  )

  const onRemove = useCallback(
    (id: number) => {
      setTodos(todos => todos.filter((todo) => todo.id !== id))
    },
    []
  )

  const onToggle = useCallback(
    (id: number) => {
      setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
    },
    []
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList onToggle={onToggle} todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  )
}

export default App
