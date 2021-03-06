import { useState } from "react"
import axios from "../axios"

const AddTodo = ({ Reset, setReset, setShowTodoForm }) => {
	const [NewTodo, setNewTodo] = useState({ task: "", description: "" })

	const addTodo = e => {
		e.preventDefault()
		axios.post("todos/", NewTodo).then(() => setReset(!Reset))
		setNewTodo({ task: "", description: "" })
		setShowTodoForm(false)
	}

	return (
		<>
			<form method="post" onSubmit={addTodo} className="sub-container">
				<h3 className="title-basic-underline">Add Todo</h3>
				<div className="form-group">
					<input
						type="text"
						name="task"
						value={NewTodo.task}
						onChange={e => setNewTodo({ ...NewTodo, task: e.target.value })}
						className="form-input"
						placeholder="Task"
						required
					/>
				</div>
				<div className="form-group">
					<textarea
						name="description"
						value={NewTodo.description}
						onChange={e =>
							setNewTodo({ ...NewTodo, description: e.target.value })
						}
						placeholder="Description"
						className="form-textarea"
					></textarea>
				</div>
				<input type="submit" value="Add" className="btn btn-block" />
			</form>
		</>
	)
}

export default AddTodo
