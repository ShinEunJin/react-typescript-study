interface TodosPropsType {
    input: string,
    todos: [],
    onChangeInput: (input: string) => string,
    onInsert: (input: string) => void,
    onToggle: () => void,
    onRemove: () => void
}

const TodoItem = ({ todo, onToggle, onRemove }: { todo: { id: number, text: string, done: boolean }, onToggle: (id: number) => void, onRemove: (id: number) => void }) => {
    return (
        <div>
            <input
                type="checkbox"
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
            />
            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>{todo.text}</span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    )
}

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove }: TodosPropsType) => {

    const onSubmit = (e: any) => {
        e.preventDefault()
        onInsert(input)
        onChangeInput("")
    }

    const onChange = (e: any) => onChangeInput(e.target.value)

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map((todo: { id: number, text: string, done: boolean }) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    )
}

export default Todos