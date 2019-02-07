import React from 'react'
import ListItem from './ListItem'
import GridItem from './GridItem'
import Item from './Item.JPG'
import Styled from 'styled-components'

const ListItemDiv = Styled.div`
float:left
`

const ViewedItems = ({ series, type }) => { 
return	type === "list" ? 	<div>
								{series.map(series => 
									<ListItemDiv key={series.id}>
										<ListItem key={series.id} series={series.title} img={series.poster_path} viewed="true" overview={series.overview}/>
									</ListItemDiv>
								)}
								
							</div>	
						:
						<div>
								{
									series.map(series =>

									<GridItem source={Item}/>
								)}
								
						</div>	
}
	
export default ViewedItems