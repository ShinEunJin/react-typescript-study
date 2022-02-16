import { createContext, SetStateAction, useState } from "react"

interface IContextProps {
    state: {
        color: string,
        subColor: string
    },
    actions: {
        setColor: React.Dispatch<SetStateAction<string>>,
        setSubColor: React.Dispatch<SetStateAction<string>>
    }
}

const ColorContext = createContext({
    state: { color: "aqua", subColor: "orange" },
    actions: {
        setColor: () => { },
        setSubColor: () => { }
    }
} as IContextProps)

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
