import TodoListItem from "./TodoListItem"
import "./TodoList.scss"

interface TodoListProps {
  todos: {
    id: number
    text: string
    checked: boolean
  }[]
  onRemove: (id: number) => void
}

const TodoList = ({ todos, onRemove }: TodoListProps) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  )
}

export default TodoList
