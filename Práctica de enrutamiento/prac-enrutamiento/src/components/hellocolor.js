import React from 'react'
import { useParams } from 'react-router-dom'

const HelloColor = () => {
	const { word, color, background } = useParams();
	return (
		<div style={{color: color, backgroundColor:background}} className='py-2 border border-secondary' >
			<span>The word is: {word}</span>
		</div>
	)
}

export default HelloColor
