import React, { useState } from 'react'
import { useCookies } from 'react-cookie'

import Popup from './Popup'

const Index = () => {

    const [showPopup, setShowPopup] = useState(true)

    const [cookies, setCookie] = useCookies(['popup-cookie'])

    return (
        <div>
            {showPopup && !cookies['popup-cookie'] && <Popup setShowPopup={setShowPopup} setCookie={setCookie} />}
        </div>
    )
}

export default Index