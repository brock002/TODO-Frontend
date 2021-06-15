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

	return (
		<div className="container">
			<h1 className="underline-text" style={{ textAlign: "center" }}>
				TODOS
			</h1>
			{IsLoading ? (
				<Loading />
			) : IsAuthenticated ? (
				<Todos Token={Token} setLoading={setLoading} />
			) : Registering ? (
				<Register />
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
