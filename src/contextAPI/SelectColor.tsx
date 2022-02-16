import { useContext } from "react"

import ColorContext from "./Color"

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"]

const SelectColor = () => {

    const { actions } = useContext(ColorContext)

    return (
        <div style={{ display: "flex", marginBottom: 30, borderBottom: "1px solid black" }}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    style={{ width: 25, height: 25, backgroundColor: color }}
                    onClick={() => actions.setColor(color)}
                    onContextMenu={(e) => {
                        e.preventDefault()
                        actions.setSubColor(color)
                    }}
                >
                </div>
            ))}
        </div>

    )
}

export default SelectColor