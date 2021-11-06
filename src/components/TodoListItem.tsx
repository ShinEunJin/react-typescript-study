import React from "react"
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md"
import cn from "classnames"

import "./TodoListItem.scss"

interface TodoProps {
  todo: {
    id: number
    text: string
    checked: boolean
  }
  onRemove: (id: number) => void
  onToggle: (id: number) => void
  style: any
}

const TodoListItem = ({ todo, onRemove, onToggle, style }: TodoProps) => {
  const { id, text, checked } = todo

  return (
    <div className="TodoListItem-window" style={style}>
      <div className="TodoListItem">
        <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  )
}

export default React.memo(TodoListItem)
