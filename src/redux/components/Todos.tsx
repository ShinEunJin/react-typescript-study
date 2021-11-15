const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <div>
            <input type="checkbox" />
            <span>내용</span>
            <button>삭제</button>
        </div>
    )
}

const Todos = ({ input, toods, onChangeInput, onInsert, onToggle, onRemove }) => {

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type="submit">등록</button>
            </form>
            <div>
                <TodoItem />
            </div>
        </div>
    )
}