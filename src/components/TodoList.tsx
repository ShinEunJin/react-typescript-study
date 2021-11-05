import React from "react"

import TodoListItem from "./TodoListItem"
import "./TodoList.scss"

interface TodoListProps {
  todos: {
    id: number
    text: string
    checked: boolean
  }[]
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}

const TodoList = ({ todos, onRemove, onToggle }: TodoListProps) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default React.memo(TodoList)
