import { BsCheckAll } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"

const Todo = ({
	id,
	task,
	is_finished,
	description,
	deleteTodo,
	completeTodo,
}) => {
	return (
		<div
			className={`todo-block ${
				is_finished ? "todo-completed" : "todo-pending"
			}`}
		>
			<div className="flexbox">
				<h5>{task}</h5>
				<div className="flexbox">
					{is_finished || (
						<button
							onClick={() => completeTodo(id)}
							className="btn btn-hipster margin-right"
						>
							<BsCheckAll />
						</button>
					)}
					<button onClick={() => deleteTodo(id)} className="btn btn-hipster">
						<AiOutlineDelete />
					</button>
				</div>
			</div>
			<p>{description}</p>
		</div>
	)
}

export default Todo
