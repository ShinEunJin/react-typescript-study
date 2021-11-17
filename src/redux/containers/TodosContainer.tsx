import { connect } from "react-redux"

import Todos from "../components/Todos"
import { changeInput, insert, toggle, remove } from '../modules/todos'
interface TodosPropsType {
    input: string,
    todos: {
        id: number,
        text: string,
        done: boolean
    }[],
    changeInput: (input: string) => { type: string, input: string },
    insert: (text: string) => { type: string, todo: { id: number, text: string, done: boolean } },
    toggle: (id: number) => { type: string, id: number },
    remove: (id: number) => { type: string, id: number }
}

const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }: TodosPropsType) => {
    return <Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />
}

export default connect(
    ({ todos }: { todos: { input: string, todos: { id: number, text: string, done: boolean }[] } }) => ({
        input: todos.input,
        todos: todos.todos
    }),
    {
        changeInput,
        insert,
        toggle,
        remove
    }
)(TodosContainer)