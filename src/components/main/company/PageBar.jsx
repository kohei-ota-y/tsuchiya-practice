import React from 'react'

const pageBar = (props) => {
    return (
        <>
        <div className="pageBar">
            <div className="pageBar_gray"></div>
            <div className="pageBar_green" style={props.barStyle}></div>
        </div>
        </>
    )
}

export default pageBar