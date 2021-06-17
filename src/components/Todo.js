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
			className={
				is_finished ? "todo-block todo-completed" : "todo-block todo-pending"
			}
		>
			<div className="flexbox">
				<h5>{task}</h5>
				<div className="flexbox">
					{is_finished || (
						<button
							onClick={() => completeTodo(id)}
							className="btn margin-right"
						>
							<BsCheckAll />
						</button>
					)}
					<button onClick={() => deleteTodo(id)} className="btn">
						<AiOutlineDelete />
					</button>
				</div>
			</div>
			<p>{description}</p>
		</div>
	)
}

export default Todo
