import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md"
import cn from "classnames"

import "./TodoListItem.scss"

interface TodoProps {
  todo: {
    id?: number
    text: string
    checked: boolean
  }
}

const TodoListItem = ({ todo }: TodoProps) => {
  const { text, checked } = todo

  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default TodoListItem
