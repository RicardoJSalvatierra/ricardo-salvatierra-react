import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemsSection from './ItemsSection'

import { cargarPelis } from '../../actions'

class PopularMoviesItemsSection extends Component{
	componentDidMount () {
		this.props.cargarPelis()
	}
	render ()  {
		return(
			<ItemsSection type={this.props.type} items={this.props.items} loading={this.props.loading} />
		)
	}
}

PopularMoviesItemsSection.defaultProps={
	type:"",
}

const mapStateToProps = state => {
	return {
		items: state.movies,
		loading: state.loading
	}
}

export default connect(
	mapStateToProps,
	{ cargarPelis }
)(PopularMoviesItemsSection)