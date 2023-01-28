import React from 'react'
import StyledBox from './StyledBox';
const BoxDisplay = ({ boxes }) => {

    return (
        <div className='boxDisplay'>
            {/* Recorrer el array de objetos */}
            {boxes.map((item, i) =>
                <StyledBox key={i} bgColor = {item.color} size = {item.size} />
            )}
        </div>
    )
}

export default BoxDisplay