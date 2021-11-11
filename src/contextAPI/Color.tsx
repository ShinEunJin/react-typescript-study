import { createContext, useState } from "react"

const ColorContext = createContext({
    state: { color: "aqua", subColor: "orange" },
})

const ColorProvider = ({ children }: { children: React.ReactNode }) => {
    const [color, setColor] = useState("aqua")
    const [subColor, setSubColor] = useState("orange")

    const value = {
        state: { color, subColor },
        actions: { setColor, setSubColor }
    }

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )
}

const { Consumer: ColorConsumer } = ColorContext

export { ColorProvider, ColorConsumer }

export default ColorContext
