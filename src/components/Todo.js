const Todo = ({
	id,
	task,
	is_finished,
	description,
	deleteTodo,
	completeTodo,
}) => {
	return (
		<div>
			<p>
				Task: {task} <br />
				{is_finished ? "finished" : "not finished"}
				<br />
				{is_finished || (
					<button onClick={() => completeTodo(id)}>&#10004;</button>
				)}
				<button onClick={() => deleteTodo(id)}>&times;</button>
				Description: {description} <br />{" "}
			</p>
			<hr />
		</div>
	)
}

export default Todo
