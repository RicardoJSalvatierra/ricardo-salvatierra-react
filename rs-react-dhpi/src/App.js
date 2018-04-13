import React, { Component } from 'react'
import './App.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { PopularMoviesItemsSection } from './components/Movies'


import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home'



const initialState = {
  todo: '',
  todos: [
    { id: 1, text: 'tarea 1' }
  ],
  movies: [],
  loading: false,
  series: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TODO':
      return {
        ...state,
        todo: action.value
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos, {
            id: action.id,
            text: action.text
          }
        ],
        todo: ''
      }
    case 'REMOVE_TODO':
        const todoIndex = state.todos.findIndex(t => t.id === action.id)
        return {
          ...state,
          todos:[
              ...state.todos.slice(0,todoIndex),
              ...state.todos.slice(todoIndex + 1)
          ]
          //todos: state.todos.filter(t => t.id != action.id)
        }
    case 'RECIBI_PELIS':
      return {
        ...state,
        movies: action.pelis,
        loading: false
      }
    case 'PIDO_PELIS':
      return {
        ...state,
        loading: true
      }
    case 'RECIBI_SERIES':
      return {
        ...state,
        series: action.series,
        loading: false
      }
    case 'PIDO_SERIES':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
global.store = store

class App extends Component {
    constructor() {
    super();
    this.state = {      
      type: "list" 
    };
  }
  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <div>
            <header>
              <BrowserRouter>
                <div>
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <div className="container">
                          <a className="navbar-brand" href="">React Movie DB APP</a>
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
                                      <Link className="nav-link" to="/PopularMoviesItemsSection">Series</Link>
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
                          <Route path="/Peliculas" component={(props) => <PopularMoviesItemsSection type={this.type} />} />
                          <Route path="/Peliculas" component={(props) => <PopularMoviesItemsSection type={this.type} />} />
                                      <PopularMoviesItemsSection type={this.type} />

                        </Switch>

                </div>

              </BrowserRouter>

            </header>
          </div>
                 
        </div>
      </Provider>
    );
  }
}

export default App;
