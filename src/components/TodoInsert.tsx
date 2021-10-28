import { useState, useCallback } from "react"
import { MdAdd } from "react-icons/md"

import "./TodoInsert.scss"

interface TodoInsertProps {
  onInsert: {
    id: number
    text: void
    checked: boolean
  }[]
}

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [value, setValue] = useState("")

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  )
}

export default TodoInsert
