import React from 'react'

import AccordionItem from './AccordionItem'
import "./AccordionList.scss"

interface Props {
    data: {
        id: number,
        name: string,
        contents: {
            id: number,
            question: string,
            answer: string
        }[]
    }[]
}

const AccordionList: React.FC<Props> = ({ data }) => {

    return (
        <div className="AccordionList">
            {data && data.length > 0 && data.map((item, idx) => <AccordionItem key={idx} data={item} />)}
        </div>
    )
}

export default AccordionList