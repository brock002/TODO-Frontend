import { useState, useEffect } from "react"
import axios from "../axios"
import Todo from "./Todo"
import AddTodo from "./AddTodo"
import Header from "./Header"

const Todos = ({ Token, logout }) => {
	const [TodoItems, setTodoItems] = useState([])
	const [Reset, setReset] = useState(false)
	const [ShowTodoForm, setShowTodoForm] = useState(false)
	axios.defaults.headers.common["Authorization"] = `Token ${Token}`

	useEffect(() => {
		getTodos()
	}, [Reset])

	const getTodos = () => {
		axios.get("todos/").then(response => setTodoItems(response.data))
	}

	const deleteTodo = id => {
		axios.delete(`todos/${id}/`).then(() => setReset(!Reset))
	}

	const completeTodo = id => {
		axios
			.patch(`todos/${id}/`, { is_finished: true })
			.then(() => setReset(!Reset))
	}

	return (
		<>
			<Header
				ShowTodoForm={ShowTodoForm}
				setShowTodoForm={setShowTodoForm}
				logout={logout}
			/>

			{ShowTodoForm ? (
				<AddTodo
					Reset={Reset}
					setReset={setReset}
					setShowTodoForm={setShowTodoForm}
				/>
			) : (
				<>
					<div
						className="sub-container"
						style={{ backgroundColor: "var(--primary-300)" }}
					>
						<h3 className="title">Pending</h3>
						<div className="title-underline"></div>
						{TodoItems.filter(item => !item.is_finished).map(item => {
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
					<div
						className="sub-container"
						style={{ backgroundColor: "var(--grey-300)" }}
					>
						<h3 className="title">Completed</h3>
						<div className="title-underline"></div>
						{TodoItems.filter(item => item.is_finished).map(item => {
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
				</>
			)}
		</>
	)
}

export default Todos
