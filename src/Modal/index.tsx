import React, { useState, useEffect } from 'react'
import Popup from './Popup'

const Index = () => {

    const [showPopup, setShowPopup] = useState(true)

    return (
        <div>
            {showPopup && <Popup />}
        </div>
    )
}

export default Index