import { useState } from "react"
import Login from "./components/Login"
import Register from "./components/Register"
import Todos from "./components/Todos"
import Loading from "./components/Loading"

function App() {
	const [Token, setToken] = useState("")
	const [IsAuthenticated, setIsAuthenticated] = useState(false)
	const [Registering, setRegistering] = useState(false)
	const [IsLoading, setLoading] = useState(false)

	const logout = () => {
		setToken("")
		setIsAuthenticated(false)
	}

	return (
		<div className="container">
			<h1 className="title">TODOS</h1>
			<div className="title-underline"></div>
			{IsLoading ? (
				<Loading />
			) : IsAuthenticated ? (
				<Todos Token={Token} logout={logout} />
			) : Registering ? (
				<Register setRegistering={setRegistering} />
			) : (
				<Login
					setToken={setToken}
					setIsAuthenticated={setIsAuthenticated}
					setRegistering={setRegistering}
					setLoading={setLoading}
				/>
			)}
		</div>
	)
}

export default App
