import React, { useState } from 'react'

import "./Accordion.scss"

interface Props {
    data: any
}

const Accordion: React.FC<Props> = ({ data }) => {

    const [toggle, setToggle] = useState<number | null>(null)

    const onHandleToggle = (idx: number) => {
        setToggle(prev => prev !== null ? null : idx)
    }

    return (
        <div>
            {data && data.length > 0 && data.map((item: any, idx: any) => (
                <div className='Accordion' key={idx}>
                    <div
                        className='Accordion-title'
                        onClick={() => onHandleToggle(idx)}
                        style={{ height: idx === toggle ? 60 : 0, backgroundColor: idx === toggle ? 'aqua' : 'white' }}
                    >
                        {item.name ? item.name : item.title ? item.title : item.question}

                    </div>
                    <Accordion data={item.contents} />
                </div>
            ))}
        </div>
    )
}

export default Accordion