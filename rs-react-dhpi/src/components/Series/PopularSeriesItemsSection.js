import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemSectionSeries from './ItemSectionSeries'

import { cargarSeries } from '../../actions'

class PopularSeriesItemsSection extends Component{
	componentDidMount () {
		this.props.cargarSeries()
		console.log('this.props.items')
		console.log(this.props.items)
	}
	render ()  {
		return(
			<ItemSectionSeries type="list" items={this.props.items} loading={this.props.loading} />
		)
	}
}

PopularSeriesItemsSection.defaultProps={
	type:"",
}

const mapStateToProps = state => {
	return {
		items: state.series,
		loading: state.loading
	}
}

export default connect(
	mapStateToProps,
	{ cargarSeries }
)(PopularSeriesItemsSection)