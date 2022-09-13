import React from 'react'
import './AnimationPopup.module.css'

function AnimationPopup(props) {
    return (props.trigger) ? (
        <>

            <div className="popup">
                <div className='popup-inner'>
                    <button className="close-btn"></button>
                    {props.children}
                </div>
            </div>
        </>
    ) : '';
}

export default AnimationPopup