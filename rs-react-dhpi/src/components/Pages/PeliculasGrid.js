import React from 'react'
import { PopularMoviesItemsSection } from '../Movies'

const PeliculasGrid = () => (
    <div className="py-5 bg-light">
        <div className="container">
            <h1>Películas</h1>
            <div className="filters-bar">
                <div className="filters-bar-left">
                    <select name="filter-year" id="filter-year" class="form-control">
                        <option value="">Año</option>
                    </select>
                    <select name="filter-sort" id="filter-sort" class="form-control">
                        <option value="">Ordenar por</option>
                    </select>
                    <select name="filter-genre" id="filter-genre" class="form-control">
                        <option value="">Géneros</option>
                    </select>
                </div>
                <div className="filters-bar-right">
                    <a href="peliculas-grid.html" class="btn btn-light active" aria-label="Profile">
                        <i className="mdi mdi-view-grid" aria-hidden="true"></i>
                    </a>
                    <a href="peliculas-list.html" class="btn btn-light" aria-label="Profile">
                        <i className="mdi mdi-view-list" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <section className="items-section">
        		<PopularMoviesItemsSection type="list" />
            </section>
        </div>
    </div>
)


export default PeliculasGrid