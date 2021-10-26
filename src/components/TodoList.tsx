import TodoListItem from "./TodoListItem"
import "./TodoList.scss"

interface TodoListProps {
  todos: {
    id: number
    text: string
    checked: boolean
  }[]
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
