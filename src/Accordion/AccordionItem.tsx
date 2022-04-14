import React, { useState } from 'react'
import AccordionDoubleItem from './AccordionDoubleItem'

import "./AccordionItem.scss"

interface Props {
    data: {
        id: number,
        name: string,
        contents: {
            id: number,
            question: string,
            answer: string
        }[]
    }
}

const AccordionItem: React.FC<Props> = ({ data }) => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className="AccordionItem">
            <div className='AccordionItem-head' onClick={() => { setToggle(prev => !prev) }}>
                {data.name}
            </div>
            <div className='AccordionItem-body'>
                {data.contents && data.contents.length > 0 && data.contents.map((item, idx) => (
                    <AccordionDoubleItem key={idx} data={item} toggle={toggle} />
                ))}
            </div>
        </div>
    )
}

export default AccordionItem