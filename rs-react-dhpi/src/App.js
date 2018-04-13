import React, { Component } from 'react'
import './App.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { ItemsSection } from './components/Movies'
import { PopularMoviesItemsSection } from './components/Movies'

import { composeWithDevTools } from 'redux-devtools-extension'
import Header from './Header'
import thunk from 'redux-thunk'

const initialState = {
  todo: '',
  todos: [
    { id: 1, text: 'tarea 1' }
  ],
  movies: [],
  loading: false
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
    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
global.store = store

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <Header />  
            <PopularMoviesItemsSection type="list" />
           
        </div>
        </Provider>
    );
  }
}

export default App;
