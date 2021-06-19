import { AiOutlineLogout, AiOutlineMinusCircle } from "react-icons/ai"
import { IoAddCircleOutline } from "react-icons/io5"

const Header = ({ ShowTodoForm, setShowTodoForm, logout }) => {
	return (
		<div className="header-container flexbox">
			<h2 className="title">TODOS</h2>
			<div className="flexbox">
				{ShowTodoForm ? (
					<button
						onClick={() => setShowTodoForm(false)}
						className="btn btn-hipster todo-btn margin-right"
					>
						<AiOutlineMinusCircle />
						&nbsp;
						<small>Remove Form</small>
					</button>
				) : (
					<button
						onClick={() => setShowTodoForm(true)}
						className="btn btn-hipster todo-btn margin-right"
					>
						<IoAddCircleOutline />
						&nbsp;
						<small>Add Todo</small>
					</button>
				)}
				<button onClick={logout} className="btn btn-hipster todo-btn">
					<AiOutlineLogout />
					&nbsp;
					<small>Logout</small>
				</button>
			</div>
		</div>
	)
}

export default Header
