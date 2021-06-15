import { useState } from "react"
import axios from "../axios"

const Login = ({
	setToken,
	setIsAuthenticated,
	setRegistering,
	setLoading,
}) => {
	const [LoginUser, setLoginUser] = useState("")
	const [LoginPass, setLoginPass] = useState("")

	const login = e => {
		e.preventDefault()
		setLoading(true)

		axios
			.post("login/", { username: LoginUser, password: LoginPass })
			.then(response => {
				setToken(response.data.token)
				setIsAuthenticated(true)
				setLoading(false)
			})
	}

	return (
		<div className="x-margin-div">
			<h3 className="underline-text">LOGIN</h3>
			<form onSubmit={login} method="post" className="form-basic">
				<div className="form-flex">
					<div className="form-group">
						<label htmlFor="username">Enter username:</label>
						<input
							type="text"
							name="username"
							value={LoginUser}
							onChange={e => setLoginUser(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Enter password:</label>
						<input
							type="password"
							name="password"
							value={LoginPass}
							onChange={e => setLoginPass(e.target.value)}
						/>
					</div>
				</div>
				<button type="submit">Log In</button>
			</form>
			<p>
				Don't have an account? <br />
				<button onClick={() => setRegistering(true)}>Register here</button>
			</p>
		</div>
	)
}

export default Login
