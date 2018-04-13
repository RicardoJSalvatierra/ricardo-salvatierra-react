import React from 'react'
import ListItem from './ListItem'
import GridItem from './GridItem'
import Item from './Item.JPG'
import Styled from 'styled-components'

const ListItemDiv = Styled.div`
float:left
`

const ViewedItems = ({ movies, type }) => { 
return	type === "list" ? 	<div>
								{movies.map(movie => 
									<ListItemDiv key={movie.id}>
										<ListItem key={movie.id} movie={movie.title} img={movie.poster_path} viewed="true" overview={movie.overview}/>
									</ListItemDiv>
								)}
								
							</div>	
						:
						<div>
								{
									movies.map(movie =>

									<GridItem source={Item}/>
								)}
								
						</div>	
}
	
export default ViewedItems