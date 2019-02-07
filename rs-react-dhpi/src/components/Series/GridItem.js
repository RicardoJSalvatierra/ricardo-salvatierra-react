import React from 'react'


const GridItem = ({ source }) => {
return	<div>
			<img src={`http://image.tmdb.org/t/p/w92${source}`} alt="logo"/>
		</div>
}

export default GridItem