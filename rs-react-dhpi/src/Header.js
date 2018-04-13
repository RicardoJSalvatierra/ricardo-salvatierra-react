import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import { PopularMoviesItemsSection } from './components/Movies'


const Header = () => {
return	<div>
			<header>
			<BrowserRouter>
			<div>
			    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			        <div className="container">
			            <a className="navbar-brand" href="#">React Movie DB APP</a>
			            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
			                <span className="navbar-toggler-icon"></span>
			            </button>

			            <div className="collapse navbar-collapse" id="navbarsExample07">
			                <ul className="navbar-nav mr-auto">
			                    <li className="nav-item">
			                        <Link className="nav-link" to="/Home">Home</Link>
			                    </li>
			                    <li className="nav-item">
			                        <Link className="nav-link" to="/PopularMoviesItemsSection">Peliculas</Link>
			                    </li>
			                    <li className="nav-item">
			                        <Link className="nav-link" to="/Home">Series</Link>
			                    </li>
			                    <li className="nav-item active">
			                        <Link className="nav-link" to="/Home">Mi Lista <span className="badge badge-danger">3</span></Link>
			                    </li>
			                </ul>
			                <form className="form-inline my-2 my-md-0" action="busqueda-peliculas-grid.html">
			                    <input className="form-control" type="text" placeholder="Buscar Película o Serie" aria-label="Search" />
			                </form>
			            </div>
			        </div>

			    </nav>
                <Switch>
                	<Route path="/Home" component={Home} />
                	<Route path="/Peliculas" component={PopularMoviesItemsSection} />


                </Switch>
                </div>
			</BrowserRouter>
			</header>
		</div>

}
export default Header