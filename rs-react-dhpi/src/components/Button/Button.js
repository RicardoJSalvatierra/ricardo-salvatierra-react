import React from 'react'
import { connect } from 'react-redux'

const Button = ({items}) => (
	<section>
		<div>			
			{
				items.map(item =>
				<button key={item.title} title={item.title} type={item.type} active={item.active}>
				<i className={`fa ${item.icon}`}></i>
				{item.title}
				</button>
			)}
		</div>
	</section>
)
const mapStateToProps = state => {
  return {
    todo: state.items,
  }
}

const addTodo = (id, text) => ({
  type: 'ADD_TODO',
  id,
  text
})

const changeTodo = value => ({
  type: 'CHANGE_TODO',
  value
})

const removeTodo = id => ({
	type:'REMOVE_TODO',
	id
})

const mapDispatchToProps = {
  onSubmit: addTodo,
  onChange: changeTodo,
  removeTodo: removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)