import React from 'react'

import "./AccordionDoubleItem.scss"
interface Props {
    data: {
        id: number,
        question: string,
        answer: string
    }
}

const AccordionDoubleItem: React.FC<Props> = ({ data }) => {
    return (
        <div className='AccordionDoubleItem'>
            <div className='AccordionDoubleItem-head'>{data.question}</div>
            <div className='AccordionDoubleItem-body'>{data.answer}</div>
        </div>
    )
}

export default AccordionDoubleItem