import React, { Dispatch, SetStateAction } from 'react'
import dayjs from 'dayjs'
import './styles.scss'

interface PopupProps {
    setShowPopup: Dispatch<SetStateAction<boolean>>
    setCookie: (name: "popup-cookie", value: any, options?: { path?: any, expires?: Date }) => void
}

const Popup = ({ setShowPopup, setCookie }: PopupProps) => {

    const onClosePopup = () => {
        setShowPopup(false)
        setCookie("popup-cookie", true, { path: '/', expires: dayjs().add(1, 'day').toDate() })
    }

    return (
        <div className='popup-box'><span onClick={onClosePopup}>닫기(쿠키 1일 등록)</span></div>
    )
}

export default Popup