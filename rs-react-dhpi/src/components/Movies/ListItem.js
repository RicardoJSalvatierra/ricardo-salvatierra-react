import React from 'react'
import Button from '../Button/Button'
import GridItem from './GridItem'
import PropTypes from 'prop-types'
import Styled from 'styled-components';

const Movies = Styled.div`
	float: left;
`

const items = [
{ title:"Agregar a Mi Lista",
  icon: "fa-eye",
  type:"btn-primary",
  active:"true"}
]


const ListItem = ({ movie, img, viewed, overview }) => { 
return viewed && 	<div>
						<Movies>
							<GridItem source={img}/>
							<p>{movie}</p>
							<div>
								<Button items={items} />
							</div>
						</Movies>
				
							<p>{overview}</p>
						
					</div>


		
}

ListItem.propTypes = {
  movie: PropTypes.string,
  viewed: PropTypes.string,
};

ListItem.defaultProps={
	movie: 'Movie Title',
	viewed: 'false'
}

export default ListItem