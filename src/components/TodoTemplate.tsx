import "./TodoTemplate.scss"

interface TodoTemplateProps {
  children: React.ReactNode
}

const TodoTemplate = ({ children }: TodoTemplateProps) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  )
}

export default TodoTemplate
