import { useState, useEffect } from "react"
import axios from "../axios"
import Todo from "./Todo"
import AddTodo from "./AddTodo"
import { AiOutlineLogout, AiOutlineMinusCircle } from "react-icons/ai"
import { IoAddCircleOutline } from "react-icons/io5"

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
			<div className="flexbox">
				<button onClick={logout} className="btn btn-hipster">
					<AiOutlineLogout />
				</button>
				{ShowTodoForm ? (
					<button
						onClick={() => setShowTodoForm(false)}
						className="btn btn-hipster"
					>
						<AiOutlineMinusCircle />
					</button>
				) : (
					<button
						onClick={() => setShowTodoForm(true)}
						className="btn btn-hipster"
					>
						<IoAddCircleOutline />
					</button>
				)}
			</div>

			{ShowTodoForm ? (
				<AddTodo
					Reset={Reset}
					setReset={setReset}
					setShowTodoForm={setShowTodoForm}
				/>
			) : (
				<>
					<div className="sub-container">
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
					<div className="sub-container">
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
