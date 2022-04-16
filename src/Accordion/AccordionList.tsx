import React from 'react'

import AccordionItem from './AccordionItem'
import "./AccordionList.scss"

import Accordion from './Accordion'

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
            <div>
                {data && data.length > 0 && data.map((item, idx) => <AccordionItem key={idx} data={item} />)}
            </div>
            <div>
                <Accordion data={data} />
            </div>
        </div>
    )
}

export default AccordionList