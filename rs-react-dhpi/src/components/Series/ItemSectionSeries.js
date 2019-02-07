import React from 'react'
import ViewedItems from './ViewedItems'
import Err from './Error404.jpg'

const ItemSectionSeries = ({ items, type, loading }) => { 
	return	loading ? 	<section className="items-section">
			                <div className="items-section-body">
			                    <div className="dimmer">
			                        <div className="loading">
			                            <i className="mdi mdi-loading" aria-hidden="true"></i>
			                        </div>
			                    </div>
			                </div>
			            </section>
            		:

            		items 	? 
				            <div>
					            <ViewedItems series={items} type="list" />
							</div>
							:
				            <div>
					            <img src={Err} alt="logo"/>
							</div>


		
}



ItemSectionSeries.defaultProps={
	type: 'list',
}

export default ItemSectionSeries