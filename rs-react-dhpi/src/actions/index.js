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

export const recibiSeries = pelis => ({
	type: 'RECIBI_SERIES',
	pelis
})


export const cargarPelis = () => dispatch => {
	dispatch(pediPelis())
	fetch('/movie/popular?api_key=e5daed30fe49cb81cf77719102f0e463&language=en-US&page=1')
		.then(res => res.json())
		.then(data =>
			dispatch(recibiPelis(data.results))
		)
}
