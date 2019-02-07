import { axios } from 'axios'

export const pediPelis = () => ({
	type: 'PIDO_PELIS'
})

export const recibiPelis = pelis => ({
	type: 'RECIBI_PELIS',
	pelis
})

export const pediSeries = () => ({
	type: 'PIDO_SERIES'
})

export const recibiSeries = series => ({
	type: 'RECIBI_SERIES',
	series
})


export const cargarPelis = () => dispatch => {
	dispatch(pediPelis())
	
	fetch('/movie/popular?api_key=e5daed30fe49cb81cf77719102f0e463&language=en-US&page=1')
		.then(res => res.json())
		.then(data => dispatch(recibiPelis(data.results))
		)
}

export const cargarSeries = () => dispatch => {
	dispatch(pediSeries())
	fetch('/tv/popular?api_key=e5daed30fe49cb81cf77719102f0e463&language=en-US&page=1')
		.then(res => res.json())
		.then(data => dispatch(recibiSeries(data.results))
		)
}