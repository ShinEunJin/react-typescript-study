import React, { useState } from 'react'

import "./AccordionDoubleItem.scss"
interface Props {
    data: {
        id: number,
        question: string,
        answer: string
    },
    toggle: boolean
}

const AccordionDoubleItem: React.FC<Props> = ({ data, toggle }) => {

    const [toggleBody, setToggleBody] = useState(false)

    return (
        <div className='AccordionDoubleItem'>
            <div
                className='AccordionDoubleItem-head'
                style={{
                    height: toggle ? 60 : 0,
                    color: toggle ? "#fff" : "#2e2e2e"
                }}
                onClick={() => setToggleBody(prev => !prev)}
            >
                {data.question}
            </div>
            <div
                className='AccordionDoubleItem-body'
                style={{
                    padding: toggleBody ? "40px 0" : "0",
                    color: toggleBody ? "wheat" : "gray"
                }}
            >
                {data.answer}
            </div>
        </div>
    )
}

export default AccordionDoubleItem