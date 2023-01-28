import React from 'react'
import { useParams } from 'react-router-dom'

const WordsNumbers = () => {
    const { variable } = useParams();

    return (
        <div>
            {isNaN(variable) 
                ?
                <span>The word is: {variable}</span>
                :
                <span>The number is: {variable}</span>
            }

        </div>
    )
}

export default WordsNumbers