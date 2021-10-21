import "./TodoTemplate.scss"

type TodoTemplatesProps = {
    name: string
}

const TodoTemplates: React.FC<TodoTemplatesProps> = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div>{name}</div>
        </div>
    )
}

export default TodoTemplates
