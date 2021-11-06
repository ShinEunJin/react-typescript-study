import React, { useCallback } from "react"
import { FixedSizeList as List } from "react-window"

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

  const rowRenderer = useCallback(({ index, style }) => {
    const todo = todos[index]
    return (
      <TodoListItem
        todo={todo}
        style={style}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    )
  }, [todos, onRemove, onToggle])

  return (
    <List
      className="TodoList"
      height={513}
      width={512}
      itemCount={todos.length}
      itemSize={57}
      style={{ outline: "none" }}
    >
      {rowRenderer}
    </List>
  )
}

export default React.memo(TodoList)
