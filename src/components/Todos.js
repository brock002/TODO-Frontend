import { useState, useEffect } from "react"
import axios from "../axios"
import Todo from "./Todo"

const Todos = ({ Token }) => {
	const [TodoItems, setTodoItems] = useState([])
	const [NewTodo, setNewTodo] = useState({ task: "", description: "" })
	const [Reset, setReset] = useState(false)
	axios.defaults.headers.common["Authorization"] = `Token ${Token}`

	useEffect(() => {
		getTodos()
	}, [Reset])

	const getTodos = () => {
		axios.get("todos/").then(response => setTodoItems(response.data))
	}

	const deleteTodo = id => {
		axios.delete(`todos/${id}/`).then(response => setReset(!Reset))
	}

	const addTodo = e => {
		e.preventDefault()
		axios.post("todos/", NewTodo).then(response => setReset(!Reset))
		setNewTodo({ task: "", description: "" })
	}

	const completeTodo = id => {
		axios
			.patch(`todos/${id}/`, { is_finished: true })
			.then(response => setReset(!Reset))
	}

	return (
		<div className="x-margin-div">
			<fieldset>
				<legend>Add New Todo</legend>
				<form method="post" onSubmit={addTodo}>
					<label htmlFor="task">Task:</label>
					<input
						type="text"
						name="task"
						value={NewTodo.task}
						onChange={e => setNewTodo({ ...NewTodo, task: e.target.value })}
					/>
					<label htmlFor="description">Description:</label>
					<input
						type="text"
						name="description"
						value={NewTodo.description}
						onChange={e =>
							setNewTodo({ ...NewTodo, description: e.target.value })
						}
					/>
					<input type="submit" value="Add" />
				</form>
			</fieldset>
			{TodoItems.map(item => {
				return (
					<Todo
						key={item.id}
						{...item}
						deleteTodo={deleteTodo}
						completeTodo={completeTodo}
					/>
				)
			})}
		</div>
	)
}

export default Todos
